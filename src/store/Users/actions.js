import { getUsers, addUser, getUser } from "@/utils/api";

export default {
  getUsersAction({commit}){
    return getUsers()
      .then((users) => {
        commit('UPDATE_USERS', users);
      })
  },
  addUserAction({commit, state}, user){
    return addUser(user)
    .then((user) => {
      commit('UPDATE_USERS', state.users.concat(user));
    })
  },
  getUserAction({commit, state}, id){
    if(state.usersDetails[id]) return Promise.resolve(state.usersDetails[id]);
    return getUser(id)
    .then((user) => {
      commit('UPDATE_USERS_DETAILS', {...state.usersDetails, [id]: user});
      return user;
    })
  },
}

