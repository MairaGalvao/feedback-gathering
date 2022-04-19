import * as Mui from "@material-ui/core";
import "./App.css";

export default function SkipButton({}) {
	return (
		<Mui.Button style={{ textTransform: "none" }}>
			<Mui.Typography className="skip">Skip</Mui.Typography>
		</Mui.Button>
	);
}
