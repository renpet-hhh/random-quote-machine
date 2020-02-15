import React from 'react';
import '../components-style/TextBox.css';

const TextBox = ({ msg, author, color, opacity }) => {
    return (
        <div id="text-box" style={{ color: color, opacity: opacity }}>
            <p id="text">
                <span id="quotation">{'\u201C'}</span>
                <span dangerouslySetInnerHTML={
                    { __html: msg }} ></span>
                {/* this regex is removing <p> and </p>*/}
            </p>
            <p id="author" dangerouslySetInnerHTML={{ __html: "- " + author }}></p>
            {/* these dangerouslySetInnerHTML were only necessary because of the challenge's restrictions 
            of having ids on text and author 
                I could have faked with a empty <p id="text"></p>, but that's not the goal*/}
        </div>
    );
}

export default TextBox;