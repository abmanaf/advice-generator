import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./App.css"

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
      <div className='quote-conatainer'>
        <div>
        <h1>Advice #{number}</h1>
        <p>"{advice}"</p>
        <div>
        <img className='desktop' src="/images/pattern-divider-desktop.svg" alt="divider-desktop" />
        <img className='mobile' src="/images/pattern-divider-mobile.svg" alt="divider-mobile" /> <br />
        <button onClick={(e)=> hanldeClick()}><img src="/images/icon-dice.svg" alt="icon-dice" />
        </button>
        </div>
        </div>
      </div>
    </div>
  );

}
export default App;
