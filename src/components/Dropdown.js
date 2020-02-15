import React, { Component } from 'react';
import '../components-style/Dropdown.css';
import '../App.css';
import { filterQuotes } from '../action-creators/filterQuotes';
import { connect } from 'react-redux';


class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.dispatchSelectedOption = this.dispatchSelectedOption.bind(this);
        this.isInputInvalid = this.isInputInvalid.bind(this);

        const {options, values} = props;
        if (this.isInputInvalid()) return [];
        let optionsJSX = [];
        for (let i = 0; i < options.length; i++) {
            optionsJSX.push(
            <option value={values[i]} key={i}>{options[i]}</option>);
        }
        this.state = {optionsJSX: optionsJSX}
    }

    isInputInvalid() {
        const {options, values} = this.props;
        return (options.length === 0 || values.length === 0
            || options.length !== values.length);
    }

    dispatchSelectedOption(event) {
        this.props.filterQuotes(event.target.value);
    }
    
    render() {
        return (
            <select value={this.props.quoteFilter} onChange={this.dispatchSelectedOption}>
                {this.state.optionsJSX}
            </select>
        );
    }
}

const mapStateToProps = ({fetch}) => ({
    quoteFilter: fetch.quoteFilter
});

const mapDispatchToProps = dispatch => ({
    filterQuotes: (optionValue) => dispatch(filterQuotes(optionValue))
});


export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);