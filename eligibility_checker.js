import { ELIGIBILITY_MATRIX } from './eligibility_matrix.js';

function getEligibilityMatch(answers) {
  for (var i = 0; i < ELIGIBILITY_MATRIX.length; i++) {
    var eligibilityOption = ELIGIBILITY_MATRIX[i];
    console.log('Checking if answers ', answers, ' match option ', eligibilityOption);
    if (isEligibilityMatch(answers, eligibilityOption)) {
      console.log('Answers ', answers, ' match option ', eligibilityOption);
      return eligibilityOption;
    }
  }

  console.log('Answers ', answers, ' do not match any option');
  return null;
}

function isEligibilityMatch(answers, eligibilityOption) {
  for (var question in eligibilityOption.answers) {
    var expectedResponse = eligibilityOption.answers[question];
    console.log('Checking if answer for question ', question, ' matches expected answer ', expectedResponse);
    if (expectedResponse === undefined) {
      // We don't care what the answer to this question is, so it's a potential match
      console.log('Answer for question ', question, ' matches expected answer since there IS no expected answer');
      continue;
    }
    if (typeof answers[question] === 'undefined') {
      // The user didn't answer this question but we're looking for an answer, so it's not a match
      console.log('Answer for question ', question, ' does NOT matches expected answer since user did not answer the question');
      return false;
    }
    if (answers[question] !== expectedResponse) {
      // The user's answer doesn't match desired response
      console.log('Answer for question ', question, ' does NOT matches expected answer.  Expected ', expectedResponse, ' but got ', answers[question]);
      return false;
    }
    console.log('Answer for question ', question, ' DOES match expected answer.  Expected ', expectedResponse, ' and got ', answers[question]);
  }

  console.log('Option ', eligibilityOption, ' matches all supplied answers ', answers);
  return true;
}

export { getEligibilityMatch };