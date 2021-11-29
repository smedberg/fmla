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


const REUSABLE_TEXT = '  something reusable';
const RESULTS = {
  not_supported: {label: 'Sorry', description: 'Not supported.  Lorem ipsum.' + REUSABLE_TEXT},
  not_ca: {label: 'Sorry', description: 'Only supported for CA residents.  Lorem ipsum.' + REUSABLE_TEXT},
  not_ca_red: {label: 'Sorry', description: 'Only supported for CA residents.  RED.' + REUSABLE_TEXT},
  not_ca_green: {label: 'Sorry', description: 'Only supported for CA residents.  GREEN.' + REUSABLE_TEXT},
  not_ca_blue: {label: 'Sorry', description: 'Only supported for CA residents.  BLUE.' + REUSABLE_TEXT},
  not_w2: {label: 'Sorry', description: 'Only supported for W2 recipients.  Lorem ipsum.' + REUSABLE_TEXT},
  low_earner: {label: 'Sorry', description: 'Please check with your employer.  Lorem ipsum.' + REUSABLE_TEXT},
  high_earner: {label: 'Yay!', description: 'We have more work to do here.  Lorem ipsum.' + REUSABLE_TEXT},
  catchall: {label: 'Ohno!', description: 'We do not have a coherent response for these choices.  Lorem ipsum.' + REUSABLE_TEXT},
};

const ELIGIBILITY_MATRIX = [
  {
    label: 'Unreported time off requirement',
    answers: {
      why_need_time_off: 'none',
      confirm_state_ca: undefined,
      which_state: undefined,
      w2_employee: undefined,
      earned_300_dollars: undefined,
      what_color_is_your_rainbow: undefined
    },
    eligibilities: ['not_supported']
  },
  {
    label: 'Not California Red',
    answers: {
      why_need_time_off: 'any',
      confirm_state_ca: 'n',
      which_state: undefined,
      w2_employee: undefined,
      earned_300_dollars: undefined,
      what_color_is_your_rainbow: 'red'
    },
    eligibilities: ['not_ca_red']
  },
  {
    label: 'Not California green',
    answers: {
      why_need_time_off: 'any',
      confirm_state_ca: 'n',
      which_state: undefined,
      w2_employee: undefined,
      earned_300_dollars: undefined,
      what_color_is_your_rainbow: 'green'
    },
    eligibilities: ['not_ca_green']
  },
  {
    label: 'Not California blue',
    answers: {
      why_need_time_off: 'any',
      confirm_state_ca: 'n',
      which_state: undefined,
      w2_employee: undefined,
      earned_300_dollars: undefined,
      what_color_is_your_rainbow: 'blue'
    },
    eligibilities: ['not_ca_blue']
  },
  {
    label: 'No W2',
    answers: {
      why_need_time_off: 'any',
      confirm_state_ca: 'y',
      which_state: undefined,
      w2_employee: 'n',
      earned_300_dollars: undefined,
      what_color_is_your_rainbow: undefined
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
      earned_300_dollars: 'n',
      what_color_is_your_rainbow: undefined
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
      earned_300_dollars: 'y',
      what_color_is_your_rainbow: undefined
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
      earned_300_dollars: undefined,
      what_color_is_your_rainbow: undefined
    },
    eligibilities: ['catchall']
  },
]

export {ELIGIBILITY_MATRIX, RESULTS};
