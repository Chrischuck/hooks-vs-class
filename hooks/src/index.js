
import React, { useState } from 'react';
import ReactDOM from "react-dom";

const App = () => {
  const [count, setCount] = useState(0);

  function onClick() {
    setCount(count + 1)
  }


  return (
    <div style={{marginLeft: '20px'}}>
      <p>
        { count }
      </p>
      <button onClick={onClick}>Click Me!</button>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
);