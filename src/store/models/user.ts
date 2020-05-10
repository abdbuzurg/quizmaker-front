import { User, UserRegister, UserLogin } from '@/models';


export default {
  state: {
    user: null
  },
  mutations: {
    SET_USER: (state: any, newUser: User) => state.user = newUser,
    LOG_OUT: (state: any) => state.user = null,
  },
  actions: {
    register: async({ commit }: any, newUser: UserRegister): Promise<String> => {
      commit('SET_USER', newUser);
      return "Success";
    },
    login: async({ commit }: any, user: UserLogin): Promise<String> => {
      const userInfo: User = {
        username: user.username,
        firstName: "blaaa",
        lastName: "klaa",
      } 
      commit('SET_USER', userInfo);
      return "Success"
    },
    logout: ({ commit }: any): void => commit('LOG_OUT'), 
  },
  getters: {
    getUser: (state: any): User => state.user,
  }
}