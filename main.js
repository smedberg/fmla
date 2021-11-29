import { surveyJSON } from './survey_metadata.js';
import { getEligibilityMatch } from './eligibility_checker.js';
import { EligibilitiesDisplay } from './eligibilities_display.js';

var eligibilitiesDisplay = void 0;

function onSurveyComplete(results) {
	console.log("Survey is complete:", eligibilityMatch);
	var eligibilityMatch = getEligibilityMatch(results.valuesHash);
	if (eligibilityMatch !== null) {
		console.log('In onSurveyComplete, found match ', eligibilityMatch);
		eligibilitiesDisplay.handleChange(eligibilityMatch.eligibilities);
	} else {
		console.log('In onSurveyComplete, did not find eligibility match ');
		// No matches- display warning
	}
}

ReactDOM.render(React.createElement(Survey.Survey, { json: surveyJSON, onComplete: onSurveyComplete }), document.getElementById("surveyContainer"));

eligibilitiesDisplay = ReactDOM.render(React.createElement(EligibilitiesDisplay, null), document.getElementById("eligibilityResultsContainer"));