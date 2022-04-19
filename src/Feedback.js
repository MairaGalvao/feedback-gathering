import "./App.css";
import React, { useState } from "react";
import * as Mui from "@material-ui/core";
import ThumbsButton from "./ThumbsButton";
import FeedbackTitle from "./FeedbackTitle";
import AdditionalFeedback from "./AdditionalFeedback";
import SubmitButton from "./SubmitButton";
import SkipButton from "./SkipButton";
import getDateAndTime from "./utils";

function Feedback() {
	let [answerClicked, setAnswerClicked] = useState(null);
	let [feedbackId, setFeedbackId] = useState();
	let [isFirstFeedback, setIsFirstFeedback] = useState(true);
	let [feedbackInput, setFeedbackInput] = useState("");

	function submitFeedback() {
		if (isFirstFeedback) {
			postFeedback();
		} else {
			putFeedback();
		}
	}

	function postFeedback() {
		const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				createdAt: getDateAndTime(),
				wasHelpful: answerClicked,
				comment: feedbackInput,
			}),
		};
		fetch(
			"https://6239be97bbe20c3f66c93c18.mockapi.io/api/v1/feedback",
			requestOptions
		)
			.then((response) => response.json())
			.then((response) => {
				setFeedbackId(response.id);
				setIsFirstFeedback(false);
			});
	}

	function putFeedback() {
		const requestOptions = {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				createdAt: getDateAndTime(),
				wasHelpful: answerClicked,
				comment: feedbackInput,
			}),
		};

		fetch(
			`https://6239be97bbe20c3f66c93c18.mockapi.io/api/v1/feedback/${feedbackId}`,
			requestOptions
		).then((response) => response.json());
	}

	return (
		<>
			<Mui.Grid container spacing={0}>
				<Mui.Grid item xs></Mui.Grid>
				<Mui.Grid item style={{ width: "184px" }}>
					<Mui.Box>
						<FeedbackTitle />

						<Mui.Box className="thumbsBox">
							<ThumbsButton
								currentAnswer={answerClicked}
								isPositive={true}
								onClick={setAnswerClicked}
							/>
							<ThumbsButton
								currentAnswer={answerClicked}
								isPositive={false}
								onClick={setAnswerClicked}
							/>
						</Mui.Box>
					</Mui.Box>
					{answerClicked !== null && (
						<>
							<AdditionalFeedback
								onChange={setFeedbackInput}
								currentFeedback={feedbackInput}
							/>

							<Mui.Box className="buttonsBox">
								<SkipButton />
								<SubmitButton onClick={submitFeedback} />
							</Mui.Box>
						</>
					)}
				</Mui.Grid>
				<Mui.Grid item xs></Mui.Grid>
			</Mui.Grid>
		</>
	);
}

export default Feedback;
