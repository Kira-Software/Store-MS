import { GET_RECORD } from "../type";

const initialstate = {
  record: null,
};

export default function (state = initialstate, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_RECORD:
      return {
        ...state,

        record: payload,
      };

    default:
      return state;
  }
}
