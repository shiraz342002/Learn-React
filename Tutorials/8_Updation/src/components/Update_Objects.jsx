import React, { useState } from 'react'

const Update_Objects = () => {
    const [car,setCar]=useState({year:2024,model:"Infernus",manufactured_By:"Rockstar Games"})
    const handleYear=(e)=>{
        setCar({...car,year:e.target.value})
    }
    const handleMan=(e)=>{
        setCar({...car,manufactured_By:e.target.value})
    }
    const handleModel=(e)=>{
        setCar({...car,model:e.target.value})
    }

  return (
    <div>
      <h1>Car Details</h1>
      <p>Car name is :{car.model}</p>
      <p>Car manufactured by is :{car.manufactured_By}</p>
      <p>Car manufactured year is :{car.year}</p>

    
     <input onChange={handleModel} value={car.model} type="text" /> <br />
     <input onChange={handleMan} value={car.manufactured_By} type="text" /> <br />
     <input onChange={handleYear} value={car.year}type="number" /> <br />
    </div>
  )
}

export default Update_Objects
