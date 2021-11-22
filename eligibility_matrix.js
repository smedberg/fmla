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

var RESULTS = {
  fmla: { label: 'Family and Medical Leave Act', description: 'You may be eligible for FMLA.  Lorem ipsum.' },
  snap: { label: 'Supplemental Nutrition Assistance Program', description: 'You may be eligible for SNAP.  Lorem ipsum.' }
};

var ELIGIBILITY_MATRIX = [

// California
{
  label: 'Employed in CA',
  answers: {
    us_state_or_territory: 'CA',
    employed: 'y'
  },
  eligibilities: ['fmla']
}, {
  label: 'Unemployed in CA',
  answers: {
    us_state_or_territory: 'CA',
    employed: 'n'
  },
  eligibilities: ['snap']
}, {
  label: 'Unknown employment in CA',
  answers: {
    us_state_or_territory: 'CA',
    employed: 'unsure'
  },
  eligibilities: ['fmla', 'snap']
},

// Washington
{
  label: 'Employed in WA',
  answers: {
    us_state_or_territory: 'WA',
    employed: 'y'
  },
  eligibilities: ['fmla', 'snap']
}, {
  label: 'Unemployed in WA',
  answers: {
    us_state_or_territory: 'WA',
    employed: 'n'
  },
  eligibilities: ['snap', 'fmla']
}, {
  label: 'Unknown employment in WA',
  answers: {
    us_state_or_territory: 'WA',
    employed: 'unsure'
  },
  eligibilities: ['snap']
},

// All other states
{
  label: 'Employed in other states',
  answers: {
    us_state_or_territory: undefined,
    employed: 'y'
  },
  eligibilities: ['fmla', 'snap']
},

// Last item matches everything- all answers are undefined
{
  label: 'Unemployed or unknown in other states',
  answers: {
    us_state_or_territory: undefined,
    employed: undefined
  },
  eligibilities: ['snap', 'fmla']
}];

export { ELIGIBILITY_MATRIX, RESULTS };