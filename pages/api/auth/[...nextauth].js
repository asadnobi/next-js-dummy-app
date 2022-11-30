import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials"
import { login, register } from '../../../services/http.services';
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "../../../lib/mongodb"

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      authorize: async (credentials) => {
        try {
          if(credentials.first_name && credentials.last_name) {
            const result = await register({ ...credentials });
            if(result.status) return result.data;
            return;
          } else {
            const result = await login({email: credentials.email, password: credentials.password});
            if(result.status) return result.data;
            return;
          }
        } catch (e) {
          return;
        }
      }
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
  ],
  callbacks: {
    async redirect({ baseUrl }) {
      return baseUrl
    },
    async jwt({ token, user, account }) {
      return {...token, ...user};
    },
    async session ({ session, token }) {
      return { ...session, user:{...token} }
    },
  },
  // pages: {
  //   error: '/login',
  // },
  adapter: MongoDBAdapter(clientPromise),
})