import React from 'react'

function List() {
  const fruitsWithCalories = [
  { fruit: 'Apple', calories: 52 },
  { fruit: 'Banana', calories: 89 },
  { fruit: 'Orange', calories: 47 },
  { fruit: 'Strawberry', calories: 32 },
  { fruit: 'Grapes', calories: 69 },
  { fruit: 'Watermelon', calories: 30 },
  { fruit: 'Blueberry', calories: 57 },
  { fruit: 'Pineapple', calories: 50 },
  { fruit: 'Mango', calories: 60 },
  { fruit: 'Peach', calories: 39 }
];
const listItems = fruitsWithCalories.map((item, index) => (
    <li key={index}>
      {item.fruit}: {item.calories} calories
    </li>
  ));
  return (
    <ol>{listItems}</ol>
  )
}

export default List
