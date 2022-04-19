import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Feedback from "./Feedback";
import reportWebVitals from "./reportWebVitals";

export const colors = {
	enabled: "#525252",
	disabled: "#E3E3E3",
};

export const MyContext = React.createContext(colors.enabled);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<MyContext.Provider value={colors}>
			<Feedback />
		</MyContext.Provider>
	</React.StrictMode>
);
reportWebVitals();
