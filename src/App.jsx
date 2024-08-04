import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [advice, setAdvice] = useState("");
  const [number, setNumber] = useState(0)


const hanldeClick = async () => {
  try{
    const response = await axios.get("https://api.adviceslip.com/advice")
    setAdvice(response.data.slip.advice)
    setNumber(response.data.slip.id)
    console.log(response)
  }
  catch(err){
    console.error(err)
  }
}

useEffect(() => {
  hanldeClick()
}, [])
  return (
    <div>
      
      <h1>Advice # {number}</h1>
      <p>{advice}</p>
      <button onClick={(e)=> hanldeClick()}>Generate</button>
    </div>
  );

}
export default App;
