import React,{useState} from 'react' 
function ColorPicker() {
    const [color,setColor]=useState("#fffff")

    function handleChangeColor(e){
        setColor(e.target.value)
        console.log(e.target.value);
    }
  return (
    <div className='colorpicker'>
    <h1>Color Picker</h1>
    <div className="color-display" style={{backgroundColor:color}}>
    <p>Selected Color: {color}</p>
    <br />
    </div>
    <label className='text'>Select a Color: </label>
    <input className='picker' type="color" value={color} onChange={handleChangeColor} />
    </div>
  )
}

export default ColorPicker
