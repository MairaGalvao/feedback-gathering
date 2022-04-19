import * as Mui from "@material-ui/core";
import "./App.css";

export default function AdditionalFeedback({ onChange, currentFeedback }) {
	return (
		<>
			<Mui.Box
				style={{
					display: "flex",
					justifyContent: "center",
				}}
			>
				<Mui.TextField
					style={{ background: "#F4F4F4" }}
					variant="outlined"
					label="Any additional feedback?"
					multiline={true}
					InputLabelProps={{
						style: {
							fontFamily: "Titillium Web",
							color: "#525252",
							fontSize: "14px",
						},
					}}
					inputProps={{
						style: {
							height: "174px",
						},
					}}
					onChange={(event) => onChange(event.target.value)}
					value={currentFeedback}
				></Mui.TextField>
			</Mui.Box>
		</>
	);
}
