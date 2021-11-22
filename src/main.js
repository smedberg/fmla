import {surveyJSON} from './survey_metadata.js';
import {getEligibilityMatch} from './eligibility_checker.js';
import {EligibilitiesDisplay} from './eligibilities_display.js';

let eligibilitiesDisplay;

function onSurveyComplete(results) {
	let eligibilityMatch = getEligibilityMatch(results.valuesHash);
	if (eligibilityMatch !== null) {
		eligibilitiesDisplay.handleChange(eligibilityMatch.eligibilities);
	} else {
		// No matches- display warning
	}

	console.log("Survey is complete:", eligibilityMatch);
}

ReactDOM.render(
	<Survey.Survey json={surveyJSON} onComplete={onSurveyComplete}/>,
	document.getElementById("surveyContainer"));


eligibilitiesDisplay = ReactDOM.render(
	<EligibilitiesDisplay/>,
	document.getElementById("eligibilityResultsContainer")
);