import { createSlice } from "@reduxjs/toolkit";

const authState = {
    token: "",
    error: "",
};

const authSlice = createSlice({
    name: "auth",
    initialState: authState,
    reducers: {
      loginSuccess: (state, action) => {
        state.token = action.payload.token;
      },
      loginFailed: (state, action) => {
        state.error = action.payload.error;
      },
    },
});
  
export const { loginSuccess, loginFailed } = authSlice.actions;

export const authReducer = authSlice.reducer;