import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../components-style/NewQuoteButton.css';
import fetchQuote from '../action-creators/fetchQuote';

class NewQuoteButton extends Component {
    render() {
        return (  
            <button id="new-quote" className="btn" onClick={this.props.fetchQuote}
            style={{backgroundColor: this.props.mainColor}}>New quote</button>
        );
    }
}

const mapStateToProps = (state) => ({
    mainColor: state.mainColor
});

const mapDispatchToProps = dispatch => ({
    fetchQuote: () => dispatch(fetchQuote())
});

export default connect(mapStateToProps, mapDispatchToProps)(NewQuoteButton);

