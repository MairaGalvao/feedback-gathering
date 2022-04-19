function getDateAndTime() {
	let today = new Date();
	let date =
		today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
	let time =
		today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	let dateAndTime = date + "T" + time + "Z";
	return dateAndTime;
}

export default getDateAndTime;
