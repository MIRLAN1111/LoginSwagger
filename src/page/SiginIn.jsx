import { Box, Button, Input, styled } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postSignUp } from "../store/authThunk";
import { useNavigate } from "react-router-dom";

const SiginIn = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [name, setName] = useState("");
	const [email, setEamil] = useState("");
	const [password, serPassword] = useState("");

	const handleChangeName = (e) => setName(e.target.value);
	const handleChangeEmail = (e) => setEamil(e.target.value);
	const handleChangePassword = (e) => serPassword(e.target.value);

	const handleSubmit = (e) => {
		e.preventDefault();
		const newData = {
			name,
			email,
			password,
		};
		dispatch(postSignUp({ newData, navigate }));
	};

	return (
		<form onSubmit={handleSubmit}>
			<MUIBox>
				<h1>Sign In</h1>

				<Input
					value={name}
					type="text"
					placeholder="Last Name"
					onChange={handleChangeName}
				/>
				<Input
					value={email}
					type="text"
					placeholder="Email@gmail.com"
					onChange={handleChangeEmail}
				/>
				<Input
					value={password}
					type="text"
					placeholder="Password"
					onChange={handleChangePassword}
				/>
				<Button variant="contained" type="submit">
					Sign In
				</Button>
			</MUIBox>
		</form>
	);
};
export default SiginIn;

const MUIBox = styled(Box)(() => ({
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	height: "100vh",
	width: "100vw",
	background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
	color: "white",
	padding: "20px",
	boxShadow: "0 3px 5px 2px rgba(255, 105, 135,.3)",
	borderRadius: "10px",
	margin: "0 auto",
	textAlign: "center",

	"& > *": {
		margin: "10px",
		width: "200px",
	},
}));
