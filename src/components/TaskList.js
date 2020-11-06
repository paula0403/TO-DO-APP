import React from 'react';
import Task from './Task'

const TaskList = (props) => {
  const active = props.tasks.filter(task => task.active)
  const done = props.tasks.filter(task => !task.active)

  if (done.length >= 2) {
    done.sort((a, b) => {
      if (a.finishDate < b.finishDate) {
        return 1
      }
      else if (a.finishDate > b.finishDate) {
        return -1
      } return 0
    })
  }
  if (active.length >= 2) {
    active.sort((a, b) => {

      if (a.date < b.date) return -1
      if (a.date > b.date) return 1
      return 0
    })
  }

  const activeTask = active.map(task => <Task key={task.id} task={task} change={props.change} delete={props.delete} />)
  const doneTask = done.map(task => <Task key={task.id} task={task} change={props.change} delete={props.delete} />)
  return (
    <>
      <div className='active'>
        <h1>To do list:</h1>
        {activeTask.length > 0 ? activeTask : <p>Brak zadań do zrobienia</p>}

      </div>
      <div className='done'>
        <h3>Tasks done:</h3><em>({doneTask.length})</em>
        {done.length > 5 && <span style={{ fontSize: 10 }}>wyświetlonych jest ostatnich 5 zadań</span>}
        {doneTask.slice(0, 5)}
      </div>

    </>
  );
}

export default TaskList;