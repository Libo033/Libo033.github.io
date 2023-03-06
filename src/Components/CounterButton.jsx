import React, { useState } from 'react';

const CounterButton = () => {
  const [clicks, setClicks] = useState(0);
  const [incrementBy, setIncrementBy] = useState(1);

  return (
    <div>
      <p>{clicks}</p>
      <label htmlFor="">Increment By
        <input type="number" onChange={e => setIncrementBy(parseInt(e.target.value))} value={incrementBy} />
      </label>
      <button onClick={() => setClicks(clicks + incrementBy)}>Click</button>    
    </div>
  );
}

export default CounterButton;
