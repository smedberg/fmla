import { surveyJSON } from './survey_metadata.js';
import { getEligibilityMatch } from './eligibility_checker.js';
import { EligibilitiesDisplay } from './eligibilities_display.js';

var eligibilitiesDisplay = void 0;

function onSurveyComplete(results) {
	var eligibilityMatch = getEligibilityMatch(results.valuesHash);
	if (eligibilityMatch !== null) {
		eligibilitiesDisplay.handleChange(eligibilityMatch.eligibilities);
	} else {
		// No matches- display warning
	}

	console.log("Survey is complete:", eligibilityMatch);
}

ReactDOM.render(React.createElement(Survey.Survey, { json: surveyJSON, onComplete: onSurveyComplete }), document.getElementById("surveyContainer"));

eligibilitiesDisplay = ReactDOM.render(React.createElement(EligibilitiesDisplay, null), document.getElementById("eligibilityResultsContainer"));