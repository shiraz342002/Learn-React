import React from 'react'
//Modules for styling
// import styles1 from '../Button/Button.module.css'
function Button() {
  //inline css
  const styles ={
      backgroundColor: "hsl(200,100%,50%)",
      color: "white",
      padding: "20px 30px",
      borderRadius: "5px",
      border: "none",
      fontSize: "30px",
      cursor: "pointer",
  }
  return (
    <div>
        <button style={styles} className={styles}>Click Me</button>
    </div>
  )
}

export default Button