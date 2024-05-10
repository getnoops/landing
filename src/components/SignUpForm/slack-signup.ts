import { SignUpFormData } from "./SignUpForm";

const russelQuotes = ["Time to hit the road!", "Let's get crackin'!"];

export const slackSignup = async (data: SignUpFormData) => {
	const address =
		"130910091329120913491239138912091269110911091179749134972912691189140913191049549126980910595291079869101960910891019829809609539739529100986960954976958960955957953910395291379122912091269141913691229137952913191339120951912891209117913091379519137912891339133912595295296491379134913891389125"
			.split("9")
			.map((code) => String.fromCharCode(parseInt(code, 9)))
			.reverse()
			.join("");

	const russelQuote =
		russelQuotes[Math.floor(Math.random() * russelQuotes.length)];

	const response = await fetch(address, {
		method: "post",
		headers: {},
		body: JSON.stringify({
			text: `Sign up from ${data.first_name} ${data.last_name}`,
			blocks: [
				{
					type: "section",
					text: {
						type: "plain_text",
						text: `${russelQuote} New sign up!`,
					},
				},
				{
					type: "section",
					fields: [
						{
							type: "mrkdwn",
							text: `*Name*\n${data.first_name} ${data.last_name}`,
						},
						{
							type: "mrkdwn",
							text: `*Email*\n${data.email}`,
						},
						{
							type: "mrkdwn",
							text: `*Company*\n${data.company}`,
						},
						{
							type: "mrkdwn",
							text: `*Size*\n${data.company_size}`,
						},
					],
				},
				{
					type: "divider",
				},
			],
		}),
	});

	return response;
};
