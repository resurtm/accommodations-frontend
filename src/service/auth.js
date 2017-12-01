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
