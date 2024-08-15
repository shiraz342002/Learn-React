import React from 'react';
import PropTypes from 'prop-types';

function Student({ name = 'John Doe', age = 18, isStudent = false }) {
  return (
    <div className='student'>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>isStudent: {isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};

export default Student;
