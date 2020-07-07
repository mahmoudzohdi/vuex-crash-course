import { users } from "./mock-data";
export const getUsers = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...users]);
    }, 2000);
  });
};
export const getUser = (id) => {
  const user = users.find(user => user.id == id);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(user);
    }, 2000);
  });
};
export const addUser = (user) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      users.push(user);
      resolve(user);
    }, 1000);
  });
};
