// const QUESTIONS = {
//   us_state_or_territory: {
//     label: 'What state do you work in?',
//     answers: {
//       CA: {label: 'California'},
//       WA: {label: 'Washington'},
//       NA: {label: 'Not currently working', }
//     }
//   },
//   employed: {
//     label: 'Are you currently an employee who receives a W-2 at the end of the year? (If you are currently self-employed, an independent contractor, or unemployed, answer No.)',
//     answers: {
//       y: {label: 'Yes'},
//       n: {label: 'No'},
//       unsure: {label: 'I am not sure'},
//     }
//   }
// };

const RESULTS = {
  not_supported: {label: 'Sorry', description: 'Not supported.  Lorem ipsum.'},
  not_ca: {label: 'Sorry', description: 'Only supported for CA residents.  Lorem ipsum.'},
  not_w2: {label: 'Sorry', description: 'Only supported for W2 recipients.  Lorem ipsum.'},
  low_earner: {label: 'Sorry', description: 'Please check with your employer.  Lorem ipsum.'},
  high_earner: {label: 'Yay!', description: 'We have more work to do here.  Lorem ipsum.'},
  catchall: {label: 'Ohno!', description: 'We do not have a coherent response for these choices.  Lorem ipsum.'},
};

const ELIGIBILITY_MATRIX = [
  {
    label: 'Unreported time off requirement',
    answers: {
      why_need_time_off: 'none',
      confirm_state_ca: undefined,
      which_state: undefined,
      w2_employee: undefined,
      earned_300_dollars: undefined
    },
    eligibilities: ['not_supported']
  },
  {
    label: 'Not California',
    answers: {
      why_need_time_off: 'any',
      confirm_state_ca: 'n',
      which_state: undefined,
      w2_employee: undefined,
      earned_300_dollars: undefined
    },
    eligibilities: ['not_ca']
  },
  {
    label: 'No W2',
    answers: {
      why_need_time_off: 'any',
      confirm_state_ca: 'y',
      which_state: undefined,
      w2_employee: 'n',
      earned_300_dollars: undefined
    },
    eligibilities: ['not_w2']
  },
  {
    label: 'Less than $300 in 18 months',
    answers: {
      why_need_time_off: 'any',
      confirm_state_ca: 'y',
      which_state: undefined,
      w2_employee: 'y',
      earned_300_dollars: 'n'
    },
    eligibilities: ['low_earner']
  },
  {
    label: 'TODO: Incomplete',
    answers: {
      why_need_time_off: 'any',
      confirm_state_ca: 'y',
      which_state: undefined,
      w2_employee: 'y',
      earned_300_dollars: 'y'
    },
    eligibilities: ['high_earner']
  },
  
  
  // Last item matches everything- all answers are undefined
  {
    label: 'Catch-all',
    answers: {
      why_need_time_off: undefined,
      confirm_state_ca: undefined,
      which_state: undefined,
      w2_employee: undefined,
      earned_300_dollars: undefined
    },
    eligibilities: ['catchall']
  },
]

export {ELIGIBILITY_MATRIX, RESULTS};
