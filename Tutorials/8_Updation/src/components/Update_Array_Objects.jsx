import React, { useState } from "react";

const Update_Array_Objects = () => {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [manCar, setManCar] = useState("");
  const [carModel, setCarModel] = useState("");

  function handleAddCar() {
    const newCar = {
      year: carYear,
      manufacturedBy: manCar,
      carModel: carModel,
    };
    setCars((c) => [...c, newCar]);
    // Reset the form fields
    setCarYear(new Date().getFullYear());
    setManCar("");
    setCarModel("");
  }

  function handleYearChange(e) {
    setCarYear(e.target.value);
  }

  function handleManChange(e) {
    setManCar(e.target.value);
  }

  function handleModelChange(e) {
    setCarModel(e.target.value);
  }

  function RemoveCar(index){
    setCars(c=>c.filter((_,i)=>i!==index))
  }
  return (
    <div>
      <h2>List of Cars Available</h2>
      <ul>
        {cars.map((car, index) => (
          <li key={index} onClick={()=>RemoveCar(index)}>
            {car.year} {car.manufacturedBy} {car.carModel}
          </li>
        ))}
      </ul>
      <input
        type="number"
        id="caryear"
        value={carYear}
        onChange={handleYearChange}
      />
      <br />
      <input
        type="text"
        id="carman"
        value={manCar}
        onChange={handleManChange}
        placeholder="Enter Car Manufacturer"
      />
      <br />
      <input
        type="text"
        id="carmodel"
        value={carModel}
        onChange={handleModelChange}
        placeholder="Enter Car Model"
      />
      <br />
      <button onClick={handleAddCar}>Add Car</button>
    </div>
  );
};

export default Update_Array_Objects;
