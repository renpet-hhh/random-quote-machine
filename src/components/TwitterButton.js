import React from 'react';
import '../components-style/TwitterButton.css';
import { connect } from 'react-redux';


const TwitterButton = ({ backgroundColor, ...props }) => {
    return (
        <div id="tweet-box" style={{ backgroundColor: backgroundColor }}>
            <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(props.quoteText)}`}>
                <i className="fab fa-twitter"></i>
            </a>
        </div>
    );
}

const mapStateToProps = state => ({
    quoteText: state.fetch.quoteText
});

export default connect(mapStateToProps)(TwitterButton);
