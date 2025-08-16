import React, { useState } from "react";
import "../App.css";
const TextArea = (props) => {
  const [text, setText] = useState("");
  let containerDarkClass =
    props.mode === "light" ? "aboutContainerLight" : "aboutContainerDark";
  function handleTextOnChange(event) {
    setText(event.target.value);
  }

  function handleOnUpperCase() {
    if (text === "") {
      props.showAlert("Please enter text first", "danger");
    } else {
      let upper = text.toUpperCase();
      setText(upper);
      props.showAlert("Converted to UpperCase", "success");
    }
  }
  function handleOnLowerCase() {
    if (text === "") {
      props.showAlert("Please enter text first", "danger");
    } else {
      let lower = text.toLowerCase();
      setText(lower);
      props.showAlert("Converted to LowerCase", "success");
    }
  }
  function handleOnClearText() {
    if (text === "") {
      props.showAlert("Please enter text first", "danger");
    } else {
      setText("");
      props.showAlert("Text has been clear.", "danger");
    }
  }
  // this returns promise navigator.clipboard.writeText()
  let handleOnCopyText = async () => {
    try {
      await navigator.clipboard.writeText(text);
      //  alert("Text copied to clipboard!");
      props.showAlert("Text copied to clipboard!", "success");
      // console.log( navigator.clipboard.writeText(text));
    } catch (error) {
      alert(`Text failed to copy! ${error}`);
    }
  };

  function handleOnExtraSpace() {
    if (text === "") {
      props.showAlert("Please enter text first", "danger");
    } else {
      let trimmed = text.replace(/\s+/g, " ");
      console.log(trimmed);
      setText(trimmed);
      props.showAlert("Text has been trimmed.", "success");
    }
  }
  return (
    <>
      <div className={`p-3 mb-3 my-3 rounded-3 ${containerDarkClass}`}>
        <h2
          style={{ color: `${props.mode === "light" ? "black" : "#b3edff"}` }}
        >
          Text Utility
        </h2>
        <textarea
          className={`form-control ${
            props.mode === "light" ? "placeHolder-light" : "placeHolder-dark"
          }`}
          id="textArea"
          rows="8"
          value={text}
          placeholder="Enter text here"
          onChange={handleTextOnChange}
          style={{
            backgroundColor: `${props.mode === "light" ? "white" : "#222020"}`,
            color: `${props.mode === "light" ? "black" : "white"}`,
          }}
        ></textarea>

        <div className="mt-4 d-flex flex-wrap gap-3">
          <button
            className="btn btn-primary my-2 button" disabled={text.length===0}
            onClick={handleOnUpperCase}
          >
            To UpperCase
          </button>

          <button
            className="btn btn-primary my-2  button" disabled={text.length===0}
            onClick={handleOnLowerCase}
          >
            To LowerCase
          </button>

          <button
            className="btn btn-primary my-2 button" disabled={text.length===0}
            onClick={handleOnClearText}
          >
            Clear Text
          </button>

          <button
            className="btn btn-primary my-2 button" disabled={text.length===0}
            onClick={handleOnExtraSpace}
          >
            Remove Extra Space
          </button>
        </div>

        <div
          className="mb-3 my-2"
          style={{ color: `${props.mode === "light" ? "black" : "#b3edff"}` }}
        >
          <h2>Text Summary</h2>

          <p>
            {
              text
                .trim()
                .split(/\s+/)
                .filter((word) => word.length > 0).length
            }{" "}
            Words and {text.length} Characters
          </p>
          <h2>Preview</h2>
          <p style={{ color: `${props.mode === "light" ? "black" : "white"}` }}>
            {text.length > 0 ? text : "Nothing to preview"}
          </p>
          {text ? (
            <button className="btn btn-primary mx-2" onClick={handleOnCopyText}>
              Copy Text
            </button>
          ) : (
            ""
          )}
        </div>

      </div>
    </>
  );
};

export default TextArea;
