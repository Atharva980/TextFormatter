import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");
  //   text = "new text";wrong way to change the state
  //   setText("new text");correct way to change the state
  const handleUpClick = () => {
    console.log("Uppercase was clicked mx-1" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    console.log("LowerCase was clicked mx-1" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    console.log("Clear text was clicked mx-1" + text);
    let newText = "";
    setText(newText);
  };

  const handleUpChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  const replaceString = () => {
    let repval = prompt("Enter the word to be replaced:");
    let tobereplaced = new RegExp(repval, "g");

    let toreplace = prompt("Enter the text that you want to replace with:");

    let newText = text.replace(tobereplaced, toreplace);
    setText(newText);
  };
  const handleCopy = () => {
    console.log("I am aa copy");
    var text = document.getElementById("myBox");
    text.Select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
  };
  return (
    <>
      <div
        className="container"
        style={{
          backgroundColor: props.mode === "dark" ? "white" : "#1165ba",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label for="myBox" className="form-label"></label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleUpChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#1165ba",
            }}
          ></textarea>
          <button className="btn btn-primary" onClick={handleUpClick}>
            Convert to UpperCase
          </button>
          <button className="btn btn-primary" onClick={handleLoClick}>
            Convert to LowerCase
          </button>
          <button className="btn btn-primary" onClick={handleClearClick}>
            Clear Text
          </button>
          <button className="btn btn-primary" onClick={replaceString}>
            Replace String
          </button>
          <button className="btn btn-primary" onClick={handleCopy}>
            Copy String
          </button>
        </div>
      </div>
      <div
        className="container my-3"
        style={{
          backgroundColor: props.mode === "dark" ? "white" : "#1165ba",
        }}
      >
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read the paragraph</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter text to preview here"}</p>
      </div>
    </>
  );
}
