import React, { useState, useMemo } from 'react';

const factorial = (n) => {
    // The useMemo hook in React is used to optimize performance by memoizing the results of expensive computations. It helps prevent unnecessary recalculations and re-renders by storing the result of a computation and only recalculating it when its dependencies change.
  if (n <= 0) return 1;
  return n * factorial(n - 1);
};

const FactorialCalculator = () => {
  const [number, setNumber] = useState(1);

  const memoizedFactorial = useMemo(() => {
    return factorial(number);
  }, [number]);

  console.log('Component rendered');
  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value, 10))}
      />
      <p>Factorial of {number} is {memoizedFactorial}</p>
    </div>
  );
};

export default FactorialCalculator;
