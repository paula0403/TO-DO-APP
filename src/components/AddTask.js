import React, { Component } from 'react';
import './AddTask.css';

class AddTask extends Component {
  minDate = new Date().toISOString().slice(0, 10)
  state = {
    text: '',
    checked: false,
    date: this.minDate,
  }
  handleText = (e) => {
    this.setState({
      text: e.target.value
    })
  }
  handleCheckbox = (e) => {
    this.setState({
      checked: e.target.checked
    })
  }
  handleDate = (e) => {
    this.setState({
      date: e.target.value
    })
  }
  handleClick = () => {
    const { text, checked, date } = this.state;
    if (text.length > 2) {
      const add = this.props.add(text, checked, date);
      if (add) {
        this.setState({
          text: '',
          checked: false,
          date: this.minDate
        })
      }
    } else { console.log('za krótko') }
  }
  render() {
    let maxDate = this.minDate.slice(0, 4) * 1 + 1;
    maxDate = maxDate + '-12-31'
    return (
      <div className='form'>
        <input type='text' placeholder='Type a task' value={this.state.text} onChange={this.handleText} />


        <input type='date' value={this.state.date} min={this.minDate} max={maxDate} onChange={this.handleDate} />
        <br />
        <input type='checkbox' id='important' value={this.state.checked} onChange={this.handleCheckbox} />
        <label htmlFor='important'>Priority</label>
        <button onClick={this.handleClick}>Add</button>

      </div>
    );
  }
}

export default AddTask;