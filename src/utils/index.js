export const setUser = user => {
  delete user.password;
  localStorage.setItem('user', JSON.stringify(user));
};

export const getUser = () => {
  const user = localStorage.getItem('user');
  if (!user) return {};
  return user;
};
