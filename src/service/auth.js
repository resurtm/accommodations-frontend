import axios from 'axios';

export const signinUser = async (email, password) => {
  const resp = (await axios.post(`${API_URL}auth/signin`, {email, password})).data;
  if (!resp.ok) {
    throw new Error(resp.msg);
  }
  localStorage.setItem(AUTH_USER, JSON.stringify({
    token: resp.data.token,
    email,
  }));
};

export const signoutUser = async () => {
  await axios.post(`${API_URL}auth/signout`);
};

export const checkAuthToken = async (token) => {
  const authUser = JSON.parse(localStorage.getItem(AUTH_USER));
  if (!authUser) {
    throw new Error('cannot check auth token for the guest user');
  }

  try {
    const resp = (await axios.post(`${API_URL}auth/check`, {token: authUser.token})).data;
    if (!resp.ok) {
      throw new Error(resp.msg);
    }
  } catch (error) {
    localStorage.removeItem(AUTH_USER);
    throw error;
  }
};
