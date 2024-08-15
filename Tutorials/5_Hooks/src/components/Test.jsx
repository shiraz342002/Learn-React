import React, { useState } from 'react'; 

const Test = () => {
    var count=0;
    const [name, setName] = useState("Guest");
    const [age,setAge]=useState(0)
    const [isEmployed,setIsEmployed]=useState(false)
    const updateName = () => {
        setName("Shiraz Mazhar")
    };
    const updateAge = () => {
        setAge(age+1)
    };
    const updateIsEmployed=()=>{
        setIsEmployed(true)
    }
    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
            <p>Age: {age}</p>
            <button onClick={updateAge}>Set Age</button>
            <p>isEmployed: {isEmployed? "Yes":"No"}</p>
            <button onClick={updateIsEmployed}>Set Employement status</button>
        </div>
    );
};

export default Test;
