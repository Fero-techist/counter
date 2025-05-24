"use client";

import { useState } from "react";

export default function Component() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="container">
      <div className="counter-card">
        <h1 className="title">Click Counter</h1>

        <div className="counter-display">
          <div className="counter-number">{count}</div>
        </div>

        <div className="button-container">
          <button
            onClick={decrement}
            className="btn btn-decrease"
          >
            Decrease
          </button>

          <button
            onClick={increment}
            className="btn btn-increase"
          >
            Increase
          </button>
        </div>

        {count === 0 && <p className="message">Counter cannot go below zero</p>}
      </div>
    </div>
  );
}
