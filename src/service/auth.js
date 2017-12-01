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

/*export const signoutUser = () => {
  // todo: make real ajax request here
  setTimeout(() => {
    resolve({email});
  }, 2000);
};

export const signupUser = (login, password) => {

};*/
