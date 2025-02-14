import React, { useState } from 'react'

export default function TexthtmlForm(props) {
  const[text,setText]=useState('ENTER TEXT HERE');
  const upperCase=()=>{
    console.log("upper case button is clicked");
    let newText=text.toUpperCase();
    setText(newText);
  }

  const lowerCase=()=>{
    console.log("lowercase button is clicked");
    let newText=text.toLowerCase();
    setText(newText);
  }

  const Clear=()=>{
    let newText=" ";
    setText(newText);
  }
  

  const handleonchange=(event)=>{
      setText(event.target.value);
  }
  
  return (
<div>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleonchange} id="myBox" rows="8"></textarea>
    </div>
    <button type="submit" className="btn btn-primary mx-2"  onClick={upperCase}>Convert to upprcase</button>
    <button tyoe="submit" className="btn btn-primary mx-2"  onClick={lowerCase}>Convert to Lowercase</button>
    <button type="submit" className="btn btn-primary mx-2" onClick={Clear}>Clear</button>
    <p>{text.split(" ").length}words and {text.length}characters and {0.008*text.split(" ").length} minutes</p>
     
  </div>
  )
}
