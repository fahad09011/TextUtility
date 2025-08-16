import React from "react";
// import "../App.css";

const About = (props) => {
  let mainDarkModeStyle = {
    color: props.mode === "light" ? "black" : "#b3edff",
    backgroundColor: props.mode === "light" ? "white" : "#080423",
  };
  let DarkModeStyleForDropDown={
    backgroundColor: props.mode === "light" ? "white" : "rgba(13, 110, 253, 0.25)",
  }
  let contianerDarkClass = props.mode === "light" ? "aboutContainerLight" : "aboutContainerDark";
  return (
    <>
      <div className={`p-3 mb-2 rounded-3 my-3 ${contianerDarkClass}`} >
        <h2 className="my-3" style={mainDarkModeStyle}>
          About Us
        </h2>
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne" style={DarkModeStyleForDropDown}
              >
                <strong>What is TextUtility?</strong>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
            >
              <div className="accordion-body" style={mainDarkModeStyle}>
                <strong>
                  TextUtility is a simple yet powerful tool designed to help you
                  manipulate text efficiently.
                </strong>
                With features like changing text case, removing extra spaces,
                copying text to clipboard, and more — it saves you time when
                working with large or unformatted text. It’s especially useful
                for students, developers, writers, and anyone who works with
                text regularly.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo" style={DarkModeStyleForDropDown}
              >
                <strong>Features of TextUtility</strong>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              className="accordion-collapse collapse"
            >
              <div className="accordion-body" style={mainDarkModeStyle}>
                <ul style={{ listStyleType: "circle" }}>
                  <li>
                    <strong>Convert Case: </strong>Transform text into
                    Uppercase, Lowercase, Sentence case, etc.
                  </li>
                  <li>
                    <strong>Remove Extra Spaces: </strong>Clean up messy text
                    with just one click.
                  </li>
                  <li>
                    <strong>Copy to Clipboard: </strong>Instantly copy processed
                    text.
                  </li>
                  <li>
                    <strong>Word & Character Count: </strong>Get real-time
                    statistics of your text.
                  </li>
                  <li>
                    <strong>Theme Support: </strong>Switch between Light and
                    Dark mode for comfortable use.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree" style={DarkModeStyleForDropDown}
              >
                <strong>How to Use?</strong>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              className="accordion-collapse collapse"
            >
              <div className="accordion-body" style={mainDarkModeStyle}>
                <ol style={{ type: "1" }}>
                  <li>Enter or paste your text into the input area.</li>
                  <li>
                    Use the available buttons to perform different text
                    operations.
                  </li>
                  <li>
                    View the updated text instantly and copy it when ready.
                  </li>
                  <li>
                    Use the statistics below (word count, character count, etc.)
                    to analyze your content.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
