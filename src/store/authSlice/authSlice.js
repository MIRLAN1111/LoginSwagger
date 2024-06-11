import { createSlice } from "@reduxjs/toolkit";
import { postSignUp } from "../authThunk";

const initialState = {
	isAuth: false,
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		logout(state) {
			localStorage.setItem("auth", "false");
		},
	},
});
export const { logout } = authSlice.actions;
