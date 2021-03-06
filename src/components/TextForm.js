import React, {useState} from 'react'
//import PropTypes from 'prop-types'


export default function TextForm(props) {
    const handleLoClick = () => {
        console.log("lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lower Case", "Success");
    }
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper Case", "Success");
    } 
  
    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value);    
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }


    const [text, setText] = useState('');
    //text = "next text"     wrong way to change the state
    //setText("new text")     correct way to change the state  
  
  
    return (
        <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className= "btn btn-primary mx-2"  onClick={handleUpClick}>Conversion to Upper case</button>
        <button className= "btn btn-primary mx-2" onClick={handleLoClick}> Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").filter((element=>{return element.length!=0})).length} words and {text.length} characters</p>
        <p>{0.008* text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it"}</p>
    </div>
    </>
  )
}
