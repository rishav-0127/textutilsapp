import React, {useState} from 'react'


  

export default function Textform() {
      const handleCopy=()=>{
        var text=document.getElementById("my box");
        text.select();
        navigator.clipboard.writeText(text.value);
      }
   const [text, setText]= useState ('');
   const handleupclick= ()=>{
    console.log("upper case");
    let newtext=text.toUpperCase();
    setText(newtext);
   }
   const handleonChange= (event)=>{
    console.log("on change");
    setText(event.target.value);
   }
   const handleloclick= ()=>{
    console.log("lower case");
    let newtext=text.toLowerCase();
    setText(newtext);
   }

  return(
  <> <div class="p-3 text-dark-emphasis bg-dark-subtle border border-dark-subtle rounded-3">
  
<div className="containers" >
  <h1>ENTER THE Text to ANALYSE  </h1>
  <div className='mb-3 '>
  <textarea className="form-control" id="my box" rows="8" value={text}  onChange={ handleonChange}></textarea> 
  </div>
  <button className='btn btn-info my-3 mx-2' onClick={handleupclick}>Convert to uppercase</button>
  <button className='btn btn-info ' onClick={handleloclick}>Convert to lower case</button>
  
  <button className='btn btn-info mx-3 my-2' onClick={handleCopy}>Copy</button>
</div>
<div className='container my-3' >
  <h1>Your text summary</h1>
  <p>{text.split(" ").length} words and {text.length} characters</p>
  <p>{0.008*text.split(" ").length} Minutes to Read</p>
  <h2> Preview</h2>
  <p >{text}</p>
</div>
</div>
  </>
  )
  
}

