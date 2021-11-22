import { ELIGIBILITY_MATRIX } from './eligibility_matrix.js';

function getEligibilityMatch(answers) {
  for (var i = 0; i < ELIGIBILITY_MATRIX.length; i++) {
    var eligibilityOption = ELIGIBILITY_MATRIX[i];
    if (isEligibilityMatch(answers, eligibilityOption)) {
      return eligibilityOption;
    }
  }

  return null;
}

function isEligibilityMatch(answers, eligibilityOption) {
  for (var question in eligibilityOption.answers) {
    var expectedResponse = eligibilityOption.answers[question];
    if (expectedResponse === undefined) {
      // We don't care what the answer to this question is, so it's a potential match
      continue;
    }
    if (typeof answers[question] === 'unknown') {
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

export { getEligibilityMatch };