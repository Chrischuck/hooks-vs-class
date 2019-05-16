import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 1
    }
  }

  onClick = () => {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }))
  }

  render() {
    return (
      <div>
        { this.state.counter }
        <button onClick={this.onClick}>Click Me!</button>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
);
