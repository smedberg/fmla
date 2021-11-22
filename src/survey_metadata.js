var surveyJSON = { title: "Do I have Paid Parental Leave?", pages: [
	{ name:"page1", questions: [ 
			{ name: "us_state_or_territory", title: "What state do you work in?", type: "dropdown", isRequired: true, choices: [
				{value: "CA", text: "California"},
				{value: "WA", text: "Washington"},
				{value: "NA", text: "Not currently working"}
			]},
			{ name: "employed", title: "Are you currently an employee who receives a W-2 at the end of the year? (If you are currently self-employed, an independent contractor, or unemployed, answer No.)", type: "radiogroup", isRequired: true, choices: [
				{value: "y", text: "Yes"},
				{value: "n", text: "No"},
				{value: "unsure", text: "I am not sure"}
			]}
	 ]}
]}

export {surveyJSON};