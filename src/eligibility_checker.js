import {ELIGIBILITY_MATRIX} from './eligibility_matrix.js';

function getEligibilityMatch(answers) {
  for (let i = 0; i < ELIGIBILITY_MATRIX.length; i++) {
    const eligibilityOption = ELIGIBILITY_MATRIX[i];
    if (isEligibilityMatch(answers, eligibilityOption)) {
      return eligibilityOption;
    }
  }

  return null;
}

function isEligibilityMatch(answers, eligibilityOption) {
  for (let question in eligibilityOption.answers) {
    const expectedResponse = eligibilityOption.answers[question]
    if (expectedResponse === undefined) {
      // We don't care what the answer to this question is, so it's a potential match
      continue;
    }
    if (typeof(answers[question]) === 'unknown') {
      // The user didn't answer this question but we're looking for an answer, so it's not a match
      return false;
    }
    if (answers[question] !== expectedResponse) {
      // The user's answer doesn't match desired response
      return false;
    }
  }
  return true;
}


export {getEligibilityMatch};