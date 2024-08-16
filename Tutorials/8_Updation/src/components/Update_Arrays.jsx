import React, { useState } from 'react';

const Update_Arrays = () => {
  const [foods, setFoods] = useState(["Apple", "Orange", "PineApple"]);
    const AddItem=()=>{
        const food=document.getElementById('foodinput').value
        if(food.trim()==""){
            alert("Invalid Input")
            return
        }
        setFoods(f=>[...foods,food])
        document.getElementById('foodinput').value=""
    }
    const RemoveItem=(index)=>{
        const newFoods = foods.filter((_, i) => i !== index);
        setFoods(newFoods);
    }
  return (
    <div>
      <h1>List of Foods</h1>
      <ul>
        {foods.map((food, index) => <li onClick={()=>RemoveItem(index)} key={index}>{food}</li>)}
      </ul>
      <h2>Add Food Item in the list</h2>
      <input type="text" id='foodinput' placeholder='Add an item here' />
      <button onClick={AddItem}>Add</button>
    </div>
  );
};

export default Update_Arrays;
