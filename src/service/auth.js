export const signinUser = (email, password) => new Promise((resolve, reject) => {
  // todo: make real ajax request here
  // setTimeout(() => {
  //   resolve({email});
  // }, 1500);
  setTimeout(() => {
    reject({email});
  }, 1500);
});

export const signoutUser = () => {
  // todo: make real ajax request here
  setTimeout(() => {
    resolve({email});
  }, 2000);
}

export const signupUser = (login, password) => {

}
