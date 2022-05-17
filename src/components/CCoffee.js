import React from 'react';

class CCoffee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      another: 'plop',
    }
  }
  handleClick() {
    this.setState({ count: this.state.count + 1 })
  }
  render() {
    const { count } = this.state;
    const { firstName } = this.props;
    return (
      <>
        <h1>Coffee List (CC)</h1>
        <p>Hello {firstName}</p>
        <p>You clicked the button {count} times.</p>
        <button onClick={() => this.handleClick()}>Click Me</button>
      </>
    )
  }
}

export default CCoffee;