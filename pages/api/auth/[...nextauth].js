import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import { login } from '../../../services/http.services';


export default async function auth(req, res) {
  // Configure one or more authentication providers
  const providers = [
    CredentialsProvider({
      name: 'Credentials',
      async authorize(credentials, req) {
        try {
          const result = await login({email: credentials.email, password: credentials.password});
          if(!result) throw new Error("Username or Password doesn't match");
          return result.data;
        } catch (e) {
          return null;
        }
      }
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    // ...add more providers here
  ]

  return await NextAuth(req, res, {
    providers,
    secret: process.env.NEXTAUTH_SECRET,
    session: {
      strategy: 'jwt',
      maxAge: 30 * 24 * 60 * 60, // 30 days
      updateAge: 24 * 60 * 60, // 24 hours
    },
    events: {
      
    },
    callbacks: {
      async signIn({ user, account, credentials }) {
        // check user have in database or not
        if(user.email == 'asadnobi@gmail.com') return true;
        return false;
      },
      async redirect({ url, baseUrl }) {
        // change address
        return process.env.NEXTAUTH_URL ? process.env.NEXTAUTH_URL : baseUrl;
      },
      async session({ session, user, token }) {
        // modify session
        return session
      },
      async jwt({ token, user, account }) {
        // modify token and save in db
        return token;
      }
    },
  })
}