import React, { Component } from 'react';
import './App.css';
import Validator from './Validator/Validator';
import CharElement from './CharElement/CharElement';
import uniqid from 'uniqid';

class App extends Component {

  state = {
    enteredText: ""
  }

  onChangeHandler = (event) => {
    this.setState({
      enteredText: event.target.value,
      charElements: []
    })
  }

  removeLetterHandler = (event, index) => {
    let enteredText = this.state.enteredText.split('');
    enteredText.splice(index,1)
    this.setState({
      enteredText: enteredText.join(''),
      charElements: []
    })
  }
  
  render() {
    const charElement = null;
    this.state.enteredText.split('').forEach((letter, index) => {
      this.state.charElements.push(<CharElement 
        key={uniqid()} 
        letter={letter} 
        remove={(event) => this.removeLetterHandler(event, index)} />);
    })
    return (
      <div className="App">
        <input type="text" onChange={this.onChangeHandler} value={this.state.enteredText} />
        <p>{this.state.enteredText.length}</p>
        <Validator textLength={this.state.enteredText.length} />
        {this.state.charElements}
      </div>
    );
  }
}

export default App;
