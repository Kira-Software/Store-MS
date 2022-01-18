import {
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../type";

const initialstate = {
  token: localStorage.getItem("token"),
  isauthenticated: null,
  loading: true,
  user: null,
};

export default function (state = initialstate, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isauthenticated: true,
        loading: false,
        user: payload,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isauthenticated: true,
        loading: false,
      };

    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isauthenticated: false,
        loading: false,
      };

    default:
      return state;
  }
}
