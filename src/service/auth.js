import axios from 'axios';

export const signinUser = async (email, password) => {
  const response = await axios.post(`${API_URL}auth/signin`, {email, password});
  localStorage.setItem(AUTH_USER, JSON.stringify({
    token: response.data.data.token,
    email,
  }));
};

export const signoutUser = async () => {
  await axios.post(`${API_URL}auth/signout`, {data: {}});
  localStorage.removeItem(AUTH_USER);
};

export const signupUser = async (username, email, password) => {
};

export const checkAuthToken = async () => {
  const userAuth = getUserAuth();
  if (userAuth === null) {
    throw new Error('Cannot check auth token for the guest user');
  }
  try {
    await axios.post(`${API_URL}auth/check`, {token: userAuth.token});
  } catch (error) {
    localStorage.removeItem(AUTH_USER);
    throw error;
  }
};

export const getUserAuth = () => {
  const userAuth = JSON.parse(localStorage.getItem(AUTH_USER));
  if (userAuth !== null) {
    axios.defaults.headers.common['Authorization'] = `bearer ${userAuth.token}`;
  }
  return userAuth;
};
