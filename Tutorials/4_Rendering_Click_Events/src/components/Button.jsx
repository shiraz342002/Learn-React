import React from 'react'

const Button = () => {
    const handleClick=(e)=>{
        console.log("Im clicked");
       console.log(e);
       e.target.textContent='Ak47'
        
    }
    
    // let count=1;
// const handleClick2=(name)=>{
//     if(count<4){
//         console.log(`${name} you clicked me ${count} times`);
//     }
//     else{
//         console.log(`${name} stop clicking me man thats not cool dawg`);
//     }
//     count++;
// }
        
  return (
//    <button onClick={(e)=>handleClick(e)}>CLick Me</button>
   <button onDoubleClick={(e)=>handleClick(e)}>CLick Me</button>
  )
}

export default Button
