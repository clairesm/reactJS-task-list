import React from 'react';
import { FaTimes, FaCheckSquare } from 'react-icons/fa';

const Task = ({ task, onDelete, onToggle, onCheck, isCompleted }) => {
  return (
    <div
      className={`task ${task.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}
        <div className='icons'>
          {' '}
          <FaCheckSquare
            style={{
              color: isCompleted ? 'green' : 'white',
              cursor: 'pointer',
              float: 'right',
            }}
            onClick={() => onCheck(task.id)}
          />
          <FaTimes
            style={{ color: 'red', cursor: 'pointer' }}
            onClick={() => onDelete(task.id)}
          />
        </div>
      </h3>
      <p>{task.day}</p>

      <p>{task.status}</p>
    </div>
  );
};

export default Task;
