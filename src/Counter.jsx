import React, { useState } from 'react'
const Counter = () => {

const counterStyle={display:'flex', width:'100px', padding:'10px', margin:'10px'};
let [inputValue, setinputValue]= useState(0);
const increment = () =>{
    setinputValue(inputValue+=1);
}
const decrement = () => {
    setinputValue(inputValue-=1);
}

  return (
    <>
     Counter
     <div style={counterStyle}>
     <input style={counterStyle} type="text" value={inputValue}/>
     <button onClick={increment} style={counterStyle} type="button">+</button>
     <button onClick={decrement} style={counterStyle} type="button">-</button>
     <div>{inputValue}</div> <br/>
     <div>{inputValue}</div><br/><br/>
     <div>{inputValue}</div>
     <div>{inputValue}</div>
     <div>{inputValue}</div>
     </div>
     
    </>
    
  )
}

export default Counter;