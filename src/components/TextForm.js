import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("Uppercase");
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearClick = () => {
        let newText = " ";
        setText(newText)
    }

    const handleCopy = () => {
        let newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }


    const handleOnChange = (event) => {
        let inputText = event.target.value;

        let newText = inputText
            .replace(/\s+/g, ' ')
            .toLowerCase()
            .replace(/\b\w/g, char => char.toUpperCase());

        setText(newText);
    }



    const [text, setText] = useState('Enter text here');

    return (
        <>
            <div className="container" style={{ backgroundColor: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.headding}</h1>
                {/* style={{backgroundColor: props.mode === 'dark'?'gray':'white',color: props.mode === 'dark'?'gray':'white'}} */}
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" onChange={handleOnChange} value={text} rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convart to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick} >Convart to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick} >Clear</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy} >Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces} >Remove Exter Space</button>

            </div>

            <div className="container my-3" style={{ backgroundColor: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
            </div>
            <h2>Preview</h2>
            <p>{text}</p>
        </>
    )
}
