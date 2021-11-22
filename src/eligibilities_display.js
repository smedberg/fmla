import {RESULTS} from './eligibility_matrix.js';

function Eligibility(eligibility) {
  console.log("Rendering eligibility ", eligibility);
  return (
    <div>
      {RESULTS[eligibility.value].label}: {RESULTS[eligibility.value].description}
    </div>
  );
}

class EligibilitiesDisplay extends React.Component {

  constructor(props) {
    super(props);
    this.state = {eligibilities: []};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ eligibilities: e });
  }

  render() {
    const renderValue = []
    for (let i = 0; i < this.state.eligibilities.length; i++) {
      console.log("Rendering eligibilities item ", i, this.state.eligibilities[i]);
      renderValue.push(<Eligibility value={this.state.eligibilities[i]} key={i}/>)
    }

    return renderValue;
  }
}

export {EligibilitiesDisplay};