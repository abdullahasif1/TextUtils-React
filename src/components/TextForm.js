import React, {useState} from 'react'
//import PropTypes from 'prop-types'


export default function TextForm(props) {
    const handleLoClick = () => {
        console.log("lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    } 
  
    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value);    
    }


    const [text, setText] = useState('Enter the text here2');
    //text = "next text"     wrong way to change the state
    //setText("new text")     correct way to change the state  
  
  
    return (
        <>
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="3"></textarea>
        </div>
        <button className= "btn btn primary mx-2"  onClick={handleUpClick}>Conversion to Upper case</button>
        <button className= "btn btn-primary mx-2" onClick={handleLoClick}> Convert to Lowercase</button>

    </div>
    <div className="container my-3">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008* text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
