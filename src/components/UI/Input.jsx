import { TextField } from "@mui/material";

const Input = ({ onChange, value, placholder, type, variant, ...rest }) => {
	return (
		<TextField
			onChange={onChange}
			value={value}
			type={type}
			variant={variant}
			{...rest}
		/>
	);
};

export default Input;
