import React, { useState } from 'react'

export default function TextForm(props) {
    const textUpHandeler = () => {
        let upperText = text.toUpperCase();
        setText(upperText)
    }

    const textlowHandeler = () => {
        let lowerText = text.toLowerCase();
        setText(lowerText)
    }

    const textReset = () => {
        let reset = ' ';
        setText(reset);
    }

    const textUpChange = (e) => {
        setText(e.target.value);

    }
    const [text, setText] = useState('');
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={textUpChange} id="myBox" placeholder="Write here..." rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick={textUpHandeler}>Convert to upercase</button>
                <button className="btn btn-primary mx-2" onClick={textlowHandeler}>Convert to lowercase</button>
                <button className="btn btn-warning mx-2" onClick={textReset}>Reset text</button>
            </div>

            <div className="container my-3">
                <h2>Your text summary</h2>
                <p><span className="fw-bold">{text.split(" ").length}</span> words and <span className="fw-bold">{text.length}</span> characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
                <h3>Preview</h3>
                <p>{ text }</p>

            </div>
        </>

    )
}
