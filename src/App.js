import React, { Component } from 'react';
import './App.css';
import QuoteBox from './components/QuoteBox';
import { connect } from 'react-redux';

class App extends Component {

  render() {
    return (
      <div className="App" style={{backgroundColor: this.props.state.mainColor}}>
          <header>Random Quote Machine</header>
          <QuoteBox />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  state: state
})


export default connect(mapStateToProps)(App);
