
import React, { useState } from 'react';
import ReactDOM from "react-dom";

const App = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);


  function onClick() {
    setCount(count + 1)
  }

  function onClick2() {
    setCount2(count2 + 1)
  }

  return (
    <div style={{marginLeft: '20px'}}>
      <p>
        { count }
      </p>
      <button onClick={onClick}>Click Me!</button>
      <p>
        { count2 }
      </p>
      <button onClick={onClick2s}>Click Me!</button>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
);