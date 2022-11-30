import { findAccount, findUser, register, addAccount, addSession } from "../services/http.services"

export default function MyAdapter() {
  let userdata = null;
  let accountdata = null;

  return {
    async createUser(data) {
      console.log('createUser', data)
      const create_user = await register({
        first_name: data.name.split(' ')[0], 
        last_name: data.name.split(' ').pop(), 
        email: data.email, 
        password: '123456', 
        profile_img: data.image
      });
      if(create_user.status) return userdata = create_user.data;
      return
    },
    async getUser(id) {
      console.log('getUser', id)
      // const find_user = await findUser({_id: id});
      // if(find_user.status) return find_user.data; 
      return
    },
    async getUserByEmail(email) {
      console.log('getUserByEmail', email);
      const find_user = await findUser({ email });
      if(find_user.status) return userdata = find_user.data;
      return
    },
    async getUserByAccount(data) {
      console.log('getUserByAccount', data)
      const find_account = await findAccount(data);
      if(find_account.status) return accountdata = find_account.data;
      return
    },
    async updateUser(user) {
      console.log('updateUser', user)
      return
    },
    async deleteUser(userId) {
      console.log('deleteUser', userId)
      return
    },
    async linkAccount(account) {
      console.log('linkAccount', account)
      const link_user = await addAccount({...account, userId: userdata._id});
      if(link_user.status) return accountdata = link_user.data;
      return
    },
    async unlinkAccount({ providerAccountId, provider }) {
      console.log('unlinkAccount', providerAccountId, provider)
      return
    },
    async createSession(session) {
      console.log('createSession', session)
      const create_session = await addSession({ ...session, userId: accountdata ? accountdata.userId : userdata._id });
      if(create_session.status) return create_session.data;
      return
    },
    async getSessionAndUser(sessionToken) {
      console.log('getSessionAndUser', sessionToken)
      // if(stored_user) return stored_user.token;
      return
    },
    async updateSession({ sessionToken }) {
      console.log('updateSession', sessionToken)
      return
    },
    async deleteSession(sessionToken) {
      console.log('deleteSession', sessionToken)
      return
    },
  }
}