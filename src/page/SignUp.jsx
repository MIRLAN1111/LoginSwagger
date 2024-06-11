import { Box, Button, TextField, styled } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postSignIn } from "../store/authThunk";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handlerSubmit = (e) => {
		e.preventDefault();
		const newValue = {
			email,
			password,
		};
		dispatch(postSignIn({newValue,navigate}));
	};

	return (
		<BoxMuiContainer onSubmit={handlerSubmit} component={"form"}>
			<TextField
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				label="Enter your email"
			/>
			<TextField
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				label="Enter your password"
			/>
			<Button type="submit" variant="contained">
				Submit
			</Button>
		</BoxMuiContainer>
	);
};

export default SignUp;

const BoxMuiContainer = styled(Box)(() => {
	return {
		width: "350px",
		height: "300px",
		display: "flex",
		flexDirection: "column",
		gap: "20px",
		padding: "20px",
	};
});
