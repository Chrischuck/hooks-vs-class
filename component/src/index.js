import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }

    this.onClick = this.onClick.bind(this)
  }


  onClick() {
    this.setState((prevState) => ({ count: prevState.count + 1 }))
  }

  render() {
    return (
      <div style={{marginLeft: '20px'}}>
        <p>
          { this.state.count }
        </p>
        <button onClick={this.onClick}>Click Me!</button>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
);
