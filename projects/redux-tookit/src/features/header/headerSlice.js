import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "Maria Giraldo",
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    updateUser: () => {
      //;;;
    },
  },
});

export const selectUser = (state) => state.header.user;

export default headerSlice.reducer;
