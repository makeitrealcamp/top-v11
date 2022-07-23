import { SET_MESSAGE } from "../constant/message";

// Action creators

const setMesessage = (payload) => ({
  type: SET_MESSAGE,
  payload: { message: payload },
});

// Mock
export const updateMessage = (message) => (dispath) => {
  console.log("updateMessage", message);
  dispath(setMesessage(message));
};
