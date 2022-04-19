import * as Mui from "@material-ui/core";
import "./App.css";

export default function SubmitButton({ onClick }) {
	return (
		<Mui.Button
			style={{ textTransform: "none", background: "#0069D9" }}
			onClick={() => onClick()}
		>
			<Mui.Typography className="submitText">Submit</Mui.Typography>
		</Mui.Button>
	);
}
