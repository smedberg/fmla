import './App.css';
import React from 'react'; 
import ReactDOM from 'react-dom';
import * as Survey from "survey-react";
import {surveyJSON} from './survey_metadata.js';
import {getEligibilityMatch} from './eligibility_checker.js'
import {EligibilitiesDisplay} from './eligibilities_display.js'


var eligibilitiesDisplay = 0;

function onSurveyComplete(results) {
  let eligibilityMatch = getEligibilityMatch(results.valuesHash);
  console.log("Survey is complete:", eligibilityMatch);
  if (eligibilityMatch !== null) {
    console.log('In onSurveyComplete, found match ', eligibilityMatch, );
    eligibilitiesDisplay.handleChange(eligibilityMatch.eligibilities);
  } else {
    console.log('In onSurveyComplete, did not find eligibility match ');
    // No matches- display warning
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

ReactDOM.render(
  <Survey.Survey json={surveyJSON} onComplete={onSurveyComplete}/>,
  document.getElementById("surveyElement"));

eligibilitiesDisplay = ReactDOM.render(React.createElement(EligibilitiesDisplay, null), document.getElementById("eligibilityResultsContainer"));

export default App;
