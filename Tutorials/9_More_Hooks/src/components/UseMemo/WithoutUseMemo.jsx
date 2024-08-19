import React, { useState } from 'react';

const factorial = (n) => {
  console.log('Calculating factorial...');
  if (n <= 0) return 1;
  return n * factorial(n - 1);
};

const WithoutMemoFactorialCalculator = () => {
  const [number, setNumber] = useState(1);

  const result = factorial(number);
  console.log('Component rendered');
  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value, 10))}
      />
      <p>Factorial of {number} is {result}</p>
    </div>
  );
};

export default WithoutMemoFactorialCalculator;
