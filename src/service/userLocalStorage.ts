export const getUserFromLocalStorage = () => {
  const storedUser = localStorage.getItem('user');
  const defaultUser = storedUser != null ? storedUser : '';
  return defaultUser;
};
