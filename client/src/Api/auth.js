import axios from "axios";

export const setAuthToken = (user) => {
  const currentUsr = {
    email: user.email,
  };
  //save user to Db and get token
  axios
    .put(`${process.env.REACT_APP_url}/user/${user?.email}`, { currentUsr })
    .then((res) => {
      localStorage.setItem("aircnc-token", res?.data?.token);
    });
};
