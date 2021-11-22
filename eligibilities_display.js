var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { RESULTS } from './eligibility_matrix.js';

function Eligibility(eligibility) {
  console.log("Rendering eligibility ", eligibility);
  return React.createElement(
    "div",
    null,
    RESULTS[eligibility.value].label,
    ": ",
    RESULTS[eligibility.value].description
  );
}

var EligibilitiesDisplay = function (_React$Component) {
  _inherits(EligibilitiesDisplay, _React$Component);

  function EligibilitiesDisplay(props) {
    _classCallCheck(this, EligibilitiesDisplay);

    var _this = _possibleConstructorReturn(this, (EligibilitiesDisplay.__proto__ || Object.getPrototypeOf(EligibilitiesDisplay)).call(this, props));

    _this.state = { eligibilities: [] };

    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(EligibilitiesDisplay, [{
    key: "handleChange",
    value: function handleChange(e) {
      this.setState({ eligibilities: e });
    }
  }, {
    key: "render",
    value: function render() {
      var renderValue = [];
      for (var i = 0; i < this.state.eligibilities.length; i++) {
        console.log("Rendering eligibilities item ", i, this.state.eligibilities[i]);
        renderValue.push(React.createElement(Eligibility, { value: this.state.eligibilities[i], key: i }));
      }

      return renderValue;
    }
  }]);

  return EligibilitiesDisplay;
}(React.Component);

export { EligibilitiesDisplay };