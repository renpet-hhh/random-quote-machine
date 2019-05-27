import React, { Component } from 'react';
import './App.css';
import QuoteBox from './components/QuoteBox';
import { connect } from 'react-redux';
import Dropdown from './components/Dropdown';

class App extends Component {

  render() {
    return (
      <div className="App" style={{backgroundColor: this.props.mainColor}}>
          <header>Random Quote Machine</header>
          <QuoteBox />
          <p id="searching-for">Searching for {this.props.quoteFilter} quotes</p>
          <div id="dropdown">
            <Dropdown options={["All", "Simpsons", "Design"]} values={["all", "Simpsons", "design"]}></Dropdown>
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  mainColor: state.fetch.mainColor,
  quoteFilter: state.fetch.quoteFilter
})


export default connect(mapStateToProps)(App);
