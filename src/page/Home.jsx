import { Box, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { logout } from "../store/authSlice/authSlice";
import { useNavigate } from "react-router-dom";
const Home = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogout = () => {
		dispatch(logout());
		navigate("/signUp");
	};
	return (
		<div>
			<Box>
				<Button onClick={handleLogout}>Logout</Button>
			</Box>
		</div>
	);
};

export default Home;
