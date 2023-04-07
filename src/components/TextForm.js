import React,{useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=>{
        // console.log('clicked');
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert('converted to upperCase',"success")
        
    }
    
    const handleSentenceCount = () => {
        let sentenceCount = 0;
        let sentences = text.split(".");
        for (let i = 0; i < sentences.length; i++) {
          if (sentences[i].trim() !== "") {
            sentenceCount++;
          }
        }
        setSentences(sentenceCount);
        props.showAlert('Sentence be counted',"success")

      };
      
      const [sentences, setSentences] = useState(0);


      const handleReverse = () => {
        let reversedText = text.split("").reverse().join("");
        setText(reversedText);
        props.showAlert('Texe converted in Reverse formate',"success")

      };

    const handleInClick = ()=>{
        // console.log('clicked');
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert('converted to LowerCase',"success")

        
    }
 
    const handleOnChange =(event)=>{
        // console.log("on change ");
        setText(event.target.value)
    }

    const handleClear = ()=>{
        let clearT = ('')
        setText(clearT)
        props.showAlert('Text be cleared',"success")
    }
 
    const handleExtraSpaces =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert('Extra spaces remove',"success")

    }

 

const [text,setText] = useState('enter the text')
//  setText("hy");
    return (
        <>        <div className='container' style={{color:props.mode==='dark'?'white':'#0d2539'}}>
            <h1 className='mb-3'>{props.heading}</h1>
            <div className="mb-3">
          
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode === 'light'?'white':'grey' , color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <div>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert 2 Uppercase</button> 
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleInClick}>Convert 2 lowercase</button> 
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClear}> Clear the Text</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleSentenceCount}>Count Sentences</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleReverse}>Reverse</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      
            
            </div>
        </div>
        <div className="container my-2" style={{color: props.mode === 'dark'?'white':'#0d2539'}}>
            <h1>Your text Summary</h1>
            <p>{text.split(' ').filter((element)=>{return element.length!==0}).length} Words and {text.replace(/\s+/g, '').length} characters</p>
            <p>Number of sentances is </p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Mintues TO Read</p>
            <p>Number of sentences is {sentences} </p>
            
            <h2> Preview</h2>
            <p>{text.length>0?text:'कुछ तो लिख भाई तभी तो दिखेगा 😝'}</p>
        </div>
        </>

    )
}
 