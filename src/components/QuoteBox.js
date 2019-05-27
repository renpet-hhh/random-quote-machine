import React, { Component } from 'react';
import TextBox from './TextBox';
import TwitterButton from './TwitterButton';
import '../components-style/QuoteBox.css';
import NewQuoteButton from './NewQuoteButton';
import { connect } from 'react-redux';
import fetchQuote from '../action-creators/fetchQuote';

class QuoteBox extends Component {

    componentDidMount() {
        this.props.fetchQuote();
    }

    render() {
        return (
            <div id="quote-box">
                <TextBox msg={this.props.quoteText} 
                author={this.props.quoteAuthor}
                color={this.props.mainColor}
                opacity={this.props.opacity}/>
                <div id="bottom-of-quotebox-container">
                    <TwitterButton backgroundColor={this.props.mainColor} />
                    <div id="new-quote-container">
                        <NewQuoteButton />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({fetch}) => ({
    quoteText: fetch.quoteText,
    quoteAuthor: fetch.quoteAuthor,
    mainColor: fetch.mainColor,
    isFetchingQuote: fetch.isFetchingQuote,
    opacity: fetch.quoteTextOpacity
});

const mapDispatchToProps = (dispatch) => ({
    fetchQuote: () => dispatch(fetchQuote()),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuoteBox);
