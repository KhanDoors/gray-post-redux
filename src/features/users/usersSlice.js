import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", name: "jerry garcia" },
  { id: "2", name: "neil young" },
  { id: "3", name: "john fogerty" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
