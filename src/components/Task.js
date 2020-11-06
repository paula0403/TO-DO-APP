import React from 'react';
const Task = (props) => {
  const style = {
    color: 'red',
  }
  const { text, date, active, id, important, finishDate } = props.task;
  if (active) {
    return (
      <div className='task'>

        <p> <strong style={important ? style : null}>{text}</strong> -to <span>{date}</span></p>
        <div>
          <button onClick={() => props.change(id)}><i className="fas fa-check-circle"></i></button>
          <button onClick={() => props.delete(id)}><i className="fas fa-trash-alt"></i></button>
        </div>
      </div>

    );
  } else {
    const finish = new Date(finishDate).toLocaleString()
    return (
      <div className='task'>
        <p>
          <strong>{text}</strong><em>(to {date})</em><br />
  -done <span>{finish}</span></p>
        <div>
          <button onClick={() => props.delete(id)}><i className="fas fa-trash-alt"></i></button>
        </div>

      </div>
    )
  }
}

export default Task;