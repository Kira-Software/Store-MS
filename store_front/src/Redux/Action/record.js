import axios from "axios";

import { GET_RECORD } from "../type";

export const getRecord = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:7000/api/approverecord");
    dispatch({
      type: GET_RECORD,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const approveRecord = (id) => async (dispatch) => {
  try {
    const res = await axios.post(
      `http://localhost:7000/api/approverecord/${id}`
    );
    dispatch(getRecord());
  } catch (err) {
    console.error(err);
  }
};
