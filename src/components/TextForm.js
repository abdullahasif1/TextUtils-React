import React, {useState} from 'react'
//import PropTypes from 'prop-types'


export default function TextForm(props) {
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
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="3"></textarea>
        </div>
        <button className="btn btn primary"  onClick={handleUpClick}>Conversion to Upper case</button>
    </div>
  )
}
