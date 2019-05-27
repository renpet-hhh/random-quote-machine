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


    timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    /* if the API call lasted more than 600ms, the user could see the old text after TextBox's fade in.
    ** delaying() increases the fade in duration, by not returning while isFetchingQuote. */
    
    async delaying() {
        console.log("delaying called");
        if (this.props.isFetchingQuote) {
            console.log("waiting...");
            await this.timeout(600).then(() => this.delaying());
            console.log("waiting ended");
        }
        // 600ms must be sync to transition: opacity 600ms; in #text-box on TextBox.css
        console.log("promise resolved... returning...");
        return 1;
    }

    render() {
        return (
            <div id="quote-box">
                <TextBox msg={this.props.quoteText} 
                author={this.props.quoteAuthor}
                color={this.props.mainColor}
                opacity={this.props.opacity}/>
                <div id="twitter_plus_new_quote_button">
                    <TwitterButton backgroundColor={this.props.mainColor} />
                    <NewQuoteButton />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    quoteText: state.quoteText,
    quoteAuthor: state.quoteAuthor,
    mainColor: state.mainColor,
    isFetchingQuote: state.isFetchingQuote,
    opacity: state.quoteTextOpacity
});

const mapDispatchToProps = (dispatch) => ({
    fetchQuote: () => dispatch(fetchQuote()),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuoteBox);
