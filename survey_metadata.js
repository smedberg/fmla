var surveyJSON = {
  "title": "SimpleLeavePlanner",
  "pages": [{
    "name": "page1",
    "elements": [{
      "type": "radiogroup",
      "name": "why_need_time_off",
      "title": "Which of the following reasons do you need time off?",
      "choices": [{
        "value": "any",
        "text": "any"
      }, {
        "value": "none_of_these",
        "text": "none of these"
      }]
    }, {
      "type": "radiogroup",
      "name": "confirm_state_ca",
      "visible": false,
      "visibleIf": "{why_need_time_off} = 'any'",
      "title": "Confirm state = CA?",
      "choices": [{
        "value": "y",
        "text": "Yes"
      }, {
        "value": "n",
        "text": "No"
      }]
    }, {
      "type": "dropdown",
      "name": "which_state",
      "visible": false,
      "visibleIf": "{confirm_state_ca} = 'n'",
      "title": "Tell us which state or territory you live in",
      "choices": [{
        "value": "WA",
        "text": "Washington"
      }, {
        "value": "OR",
        "text": "Oregon"
      }, {
        "value": "NV",
        "text": "Nevada"
      }]
    }, {
      "type": "radiogroup",
      "name": "w2_employee",
      "visible": false,
      "visibleIf": "{confirm_state_ca} = 'y'",
      "title": "Are you currently a W2 employee? (do you get a W2?)",
      "choices": [{
        "value": "y",
        "text": "Yes"
      }, {
        "value": "n",
        "text": "No"
      }]
    }, {
      "type": "radiogroup",
      "name": "earned_300_dollars",
      "visible": false,
      "visibleIf": "{confirm_state_ca} = 'y' and {w2_employee} = 'y'",
      "title": "Have you earned more than $300 total in the last 18 months?",
      "choices": [{
        "value": "y",
        "text": "Yes"
      }, {
        "value": "n",
        "text": "No"
      }]
    }]
  }],
  "triggers": [{
    "type": "complete",
    "expression": "{why_need_time_off} = 'item2'"
  }, {
    "type": "complete",
    "expression": "{which_state} notempty"
  }, {
    "type": "complete",
    "expression": "{w2_employee} = 'n'"
  }, {
    "type": "complete",
    "expression": "{earned_300_dollars} = 'n'"
  }],
  "showTitle": false
};

export { surveyJSON };