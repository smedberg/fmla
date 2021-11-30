var surveyJSON = {
 "title": "SimpleLeavePlanner",
 "pages": [
  {
   "name": "page1",
   "elements": [
    {
     "type": "radiogroup",
     "name": "why_need_time_off",
     "title": "Which of the following reasons do you need time off?",
     "isRequired": true,
     "choices": [
      {
       "value": "pregnant",
       "text": "I am pregnant"
      },
      {
       "value": "care_for_newborn",
       "text": "I need to care for a newborn"
      },
      {
       "value": "medical_need",
       "text": "I have a medical need that requires medical care"
      }
     ],
     "hasOther": true
    },
    {
     "type": "radiogroup",
     "name": "confirm_state_ca",
     "visibleIf": "{why_need_time_off} <> 'Other'",
     "title": "Confirm state = CA?",
     "isRequired": true,
     "choices": [
      {
       "value": "y",
       "text": "Yes"
      },
      {
       "value": "n",
       "text": "No"
      }
     ]
    },
    {
     "type": "dropdown",
     "name": "which_state",
     "visible": false,
     "visibleIf": "{confirm_state_ca} = 'n'",
     "title": "Tell us which state or territory you live in",
     "choices": [
      "Alabama (AL)",
      "Alaska (AK)",
      "Arizona (AZ)",
      "Arkansas (AR)",
      "California (CA)",
      "Colorado (CO)",
      "Connecticut (CT)",
      "Delaware (DE)",
      "District of Columbia (DC)",
      "Florida (FL)",
      "Georgia (GA)",
      "Hawaii (HI)",
      "Idaho (ID)",
      "Illinois (IL)",
      "Indiana (IN)",
      "Iowa (IA)",
      "Kansas (KS)",
      "Kentucky (KY)",
      "Louisiana (LA)",
      "Maine (ME)",
      "Maryland (MD)",
      "Massachusetts (MA)",
      "Michigan (MI)",
      "Minnesota (MN)",
      "Mississippi (MS)",
      "Missouri (MO)",
      "Montana (MT)",
      "Nebraska (NE)",
      "Nevada (NV)",
      "New Hampshire (NH)",
      "New Jersey (NJ)",
      "New Mexico (NM)",
      "New York (NY)",
      "North Carolina (NC)",
      "North Dakota (ND)",
      "Ohio (OH)",
      "Oklahoma (OK)",
      "Oregon (OR)",
      "Pennsylvania (PA)",
      "Rhode Island (RI)",
      "South Carolina (SC)",
      "South Dakota (SD)",
      "Tennessee (TN)",
      "Texas (TX)",
      "Utah (UT)",
      "Vermont (VT)",
      "Virginia (VA)",
      "Washington (WA)",
      "West Virginia (WV)",
      "Wisconsin (WI)",
      "Wyoming (WY)"
     ]
    },
    {
     "type": "radiogroup",
     "name": "w2_employee",
     "visible": false,
     "visibleIf": "{confirm_state_ca} = 'y'",
     "title": "Are you currently an employee who receives a W-2 at the end of the year? ",
     "description": "(If you are currently self-employed, an independent contractor, or unemployed, answer No.) ",
     "isRequired": true,
     "choices": [
      {
       "value": "y",
       "text": "Yes"
      },
      {
       "value": "n",
       "text": "No"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "earned_300_dollars",
     "visible": false,
     "visibleIf": "{confirm_state_ca} = 'y' and {w2_employee} = 'y'",
     "title": "Have you earned at least $300 over the last 18 months?",
     "description": "(It's ok if you earned the $300 over many paychecks, and from different employers. It all counts.)",
     "isRequired": true,
     "choices": [
      {
       "value": "y",
       "text": "Yes"
      },
      {
       "value": "n",
       "text": "No"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "employ_at_least_5",
     "visibleIf": "{confirm_state_ca} = 'y' and {w2_employee} = 'y'",
     "title": "Does your employer employ at least 5 people, including you?",
     "isRequired": true,
     "choices": [
      {
       "value": "yes",
       "text": "Yes"
      },
      {
       "value": "no",
       "text": "No"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "work_at_least_1_year_1250_hours",
     "visible": false,
     "visibleIf": "{confirm_state_ca} = 'y' and {employ_at_least_5} = 'yes' and {w2_employee} = 'y'",
     "title": "Have you worked at your current job for at least 1 year, at least part time?",
     "description": "(Part time means at least 1,250 hours over the last 12 months, or about 25 hours per week.)",
     "isRequired": true,
     "choices": [
      {
       "value": "yes",
       "text": "Yes"
      },
      {
       "value": "no",
       "text": "No"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "planned_c_section",
     "visible": false,
     "visibleIf": "{w2_employee} = 'y' and {why_need_time_off} = 'pregnant'",
     "title": "Are you planning to have a Cesarean section (C-section)?",
     "isRequired": true,
     "choices": [
      {
       "value": "yes",
       "text": "Yes"
      },
      {
       "value": "no",
       "text": "No"
      }
     ]
    }
   ]
  }
 ],
 "triggers": [
  {
   "type": "complete",
   "expression": "{why_need_time_off} = 'item2'"
  },
  {
   "type": "complete",
   "expression": "{which_state} notempty"
  },
  {
   "type": "complete",
   "expression": "{w2_employee} = 'n'"
  },
  {
   "type": "complete",
   "expression": "{earned_300_dollars} = 'n'"
  }
 ],
 "showTitle": false
}

export {surveyJSON};
