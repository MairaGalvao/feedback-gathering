import "./App.css";
import * as Mui from "@material-ui/core";

export default function FeedbackTitle() {
	return (
		<>
			<Mui.Box className="title">
				<Mui.Typography>
					<b>Is this helpful?</b>
				</Mui.Typography>
			</Mui.Box>
		</>
	);
}
