import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";

const App = () => {
  const [count, setCount] = useState(0);

  function onClick() {
    setCount(count + 1)
  }

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

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