import React from 'react';
import '../components-style/TwitterButton.css';


export default function TwitterButton(props) {
    return (
        <div id="tweet-box" style={{backgroundColor: props.backgroundColor}}>
            <a id="tweet-quote" href={props.href}>
                <i className="fab fa-twitter"></i>
            </a>
        </div>
    );
}
