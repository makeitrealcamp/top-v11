import { SET_MESSAGE } from "../constant/message";

const initiatValue = { message: "default..." };

function reducer(state = initiatValue, action) {
  console.log("messageReducer", state, action);

  switch (action.type) {
    case SET_MESSAGE:
      return action.payload;
    default:
      return state;
  }
}

export default reducer;
