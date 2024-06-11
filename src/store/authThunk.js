import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
export const postSignUp = createAsyncThunk(
	"signUp/postSignUp",
	async ({ newData, navigate }, { rejectWithValue }) => {
		try {
			const response = await axios.post(
				`${BASE_URL}/api/auth/signUpForClient`,
				newData
			);
			navigate("/signup");
			return response.data;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

export const postSignIn = createAsyncThunk(
	"signUp/postSignIn",
	async ({ newValue,navigate }, { rejectWithValue }) => {
		try {
			await axios.post(`${BASE_URL}/api/auth/signIn`, newValue);
			navigate('/welcome')
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);
