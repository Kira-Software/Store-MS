import axios from "axios";

import { USER_LOADED, LOGIN_SUCCESS, LOGOUT } from "../type";
import setAuthToken from "../../utils/setAuthToken";

export const loaduser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get("http://localhost:7000/api/auth");
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const login = (email, password) => async (dispatch) => {
  console.log("inside the login", email, password);
  const user = {
    email,
    password,
  };

  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  const body = JSON.stringify(user);

  try {
    const res = await axios.post(
      "http://localhost:7000/api/auth",
      body,
      config
    );

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loaduser());

    console.log(res);
  } catch (err) {
    console.error(err.message);
  }
};
