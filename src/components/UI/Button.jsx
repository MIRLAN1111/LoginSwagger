import { Button as MuiButton } from "@mui/material";
const Button = ({ children, onClick, type, variant, ...rest }) => {
	return (
		<MuiButton onClick={onClick} type={type} variant={variant} {...rest}>
			{children}
		</MuiButton>
	);
};

export default Button;
