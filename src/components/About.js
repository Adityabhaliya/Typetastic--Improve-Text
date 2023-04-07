import React, { useState } from 'react'

export default function About(props) {

    // const  [mystyle , setMyStyle] = useState ({
    //     color:'black',
    //     backgroundColor:'white'
    // })

    let mystyle = {
    color: props.mode === 'dark'? 'white':'black',
    backgroundColor: props.mode === 'dark'?'#1b3851':'white',
   
    }

  return (
    <div className='container' style={mystyle}>
        <h1 className='my-3'>About Us</h1>
      <div className="accordion" id="accordionExample" style={mystyle}>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
    <strong> Analize To Text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
       Typetastic gives you a way to analyze your text  <strong> quickly and efficiently.</strong>  Be it word count, character count <code>or reverse text,copy text,uppercase and lowercase facility also remove extra spaces,</code> thats it ! 
      </div>
 

    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
    <strong> Free To Use </strong> 
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
     Typetastic is a Free Character counter tool that provides instant  <strong> character count & word count statistics for a given text.</strong> Typetastic reports the number of words and characters. Thus it is suitable for writing text with <code> word/character limit.</code>

      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong> Browser Compatible </strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
    This word counter software works in any web Browsers such as   <strong> Chrome , firefox ,internet Explorer,safari,opera.</strong>It suits to count characters in facebook , blog , books, excel docment ,pdf document , essays , etc.
      </div>
    </div>
  </div>
</div>
 
<div className='container my-3'>



</div>
    </div>
  )
}