import React from "react";

const Count = () => {
  const [count, setCount] = React.useState(0);
  function add() {
    setCount(count + 1);
  }
  function rest() {
    setCount(count - 1);
  }
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={add}>+1</button>
      <button onClick={rest}> -1</button>
    </>
  );
};

export default Count;
