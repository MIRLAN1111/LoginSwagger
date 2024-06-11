import {
	Navigate,
	RouterProvider,
	createBrowserRouter,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "../page/Home";
import SiginIn from "../page/SiginIn";
import ConfirmByEmail from "../page/ConfirmByEmail";
import SignUp from "../page/SignUp";
import WelcomePage from "../page/WelcomePage";
// import WelcomePage from "../page/WelcomePage";

const AppRoutes = () => {
	const { isAuth } = useSelector((state) => state.auth);
	const router = createBrowserRouter([
		{
			path: "/",
			element: isAuth ? <Home /> : <Navigate to="/signin" />,
		},
		{
			path: "/signin",
			element: <SiginIn />,
		},
		{
			path: "/confirmByEmail",
			element: <ConfirmByEmail />,
		},
		{
			path: "/signup",
			element: <SignUp />,
		},
		{
			path: "/welcome",
			element: <WelcomePage />,
		},
		
	]);
	return <RouterProvider router={router} />;
};

export default AppRoutes;
