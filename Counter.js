import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const limit = 10; // Set a threshold value

  // Functions for increasing and decreasing the count:
  const handleIncrease = () => {
    if (count < limit) {
      setCount(count + 1);
    }
  };

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
// Function to reset the count:
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Click Counter</h1>
      <h2>{count}</h2>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      {count === limit && <p style={{ color: 'red' }}>You've reached the limit!</p>}
      {count === 0 && <p style={{ color: 'blue' }}>Count cannot go below zero!</p>}
      <p style={{ color: 'green' }}>Current Count: {count}</p>
      <p style={{ color: 'orange' }}>Click the buttons to change the count.</p>
      <p style={{ color: 'brown' }}>Note: The count cannot go below zero or exceed the limit.</p>

  </div>
  );
};

export default Counter;
