import React from "react";

class ChangingProgressProvider extends React.Component {
  static defaultProps = {
    interval: 1000
  };

  state = {
    valuesIndex: 0
  };

  componentDidMount() {
  }

  render() {
    return this.props.children(this.props.values[this.state.valuesIndex]);
  }
}

export default ChangingProgressProvider;
