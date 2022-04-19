import "./App.css";
import * as Mui from "@material-ui/core";
import React, { useState, useEffect, useContext } from "react";
import { MyContext } from "./index";
import { HiOutlineThumbUp } from "react-icons/hi";
import { HiOutlineThumbDown } from "react-icons/hi";

export default function ThumbsButton({ onClick, isPositive, currentAnswer }) {
	const colors = useContext(MyContext);

	return (
		<>
			<Mui.Button
				style={{ textTransform: "none" }}
				className="thumbsBtn"
				onClick={() => onClick(isPositive)}
			>
				<Mui.Box
					style={{
						display: "flex",
						alignContent: "center",
						marginRight: "9px",
						color:
							currentAnswer === isPositive || currentAnswer === null
								? colors.enabled
								: colors.disabled,
					}}
				>
					{isPositive ? (
						<HiOutlineThumbUp size={"17px"} />
					) : (
						<HiOutlineThumbDown size={"17px"} />
					)}
				</Mui.Box>{" "}
				<Mui.Typography className="thumbsText" style={{ fontSize: "14px" }}>
					{isPositive ? "Yes" : "No"}
				</Mui.Typography>
			</Mui.Button>
		</>
	);
}
