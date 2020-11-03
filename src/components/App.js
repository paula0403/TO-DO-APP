import React, { Component } from 'react';

import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';

class App extends Component {
  counter = 9
  state = {
    tasks: [
      {
        id: 0,
        text: 'pójść do fryzjera',
        date: '2020-12-15',
        important: true,
        active: true,
        finishDate: null
      },
      { id: 1, text: "zrobić prezenty na święta", date: '2020-12-10', important: false, active: true, finishDate: null },
      { id: 2, text: "pomalować pokój", date: '2021-01-11', important: false, active: true, finishDate: null },
      { id: 3, text: "kupić nową drukarkę", date: '2020-12-31', important: true, active: true, finishDate: null },
      { id: 4, text: "zapisać się na kurs", date: '2020-11-08', important: false, active: true, finishDate: null },
      { id: 5, text: "zmienić CV", date: '2020-12-11', important: false, active: true, finishDate: null },
      { id: 6, text: "kosmetyczka!!!", date: '2020-11-30', important: true, active: true, finishDate: null },
      { id: 7, text: "wizyta w sądzie", date: '2020-11-18', important: false, active: true, finishDate: null },
      { id: 8, text: "pójść z psem do fryzjera", date: '2020-12-10', important: false, active: true, finishDate: null },
    ]
  }
  deleteTask = (id) => {
    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id)
    this.setState({
      tasks
    })
  }
  changeTaskStatus = (id) => {
    const tasks = Array.from(this.state.tasks);
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    })
    this.setState({
      tasks
    })
  }
  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text,
      date,
      important,
      active: true,
      finishDate: null
    }
    this.counter++;
    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }))

  }
  render() {
    return (
      <div className='App'>
        <h1>TO DO APP</h1>
        <AddTask add={this.addTask} />
        <TaskList change={this.changeTaskStatus} delete={this.deleteTask} tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;