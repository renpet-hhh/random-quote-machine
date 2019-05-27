import React from 'react';
import '../components-style/TwitterButton.css';


export default function TwitterButton({backgroundColor}) {
    return (
        <div id="tweet-box" style={{backgroundColor: backgroundColor}}>
            <a id="tweet-quote" href="twitter.com/intent/tweet">
                <i className="fab fa-twitter"></i>
            </a>
        </div>
    );
}
