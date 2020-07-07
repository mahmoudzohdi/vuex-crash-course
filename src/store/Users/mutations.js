export default {
  UPDATE_USERS(state, users){
    state.users = users;
  },
  UPDATE_USERS_DETAILS(state, usersDetails){
    state.usersDetails = JSON.parse(JSON.stringify(usersDetails));
  }
}