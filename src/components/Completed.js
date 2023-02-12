import React from 'react';
import { Link } from 'react-router-dom';
import Task from './Task';

const Completed = ({ tasks, onDelete, onToggle, onCheck }) => {
  return (
    <div className='complete'>
      <h3>Completed:</h3>
      <Link to='/'>Go Back</Link>

      {tasks.map((task, index) => {
        if (task.status === 'completed') {
          return (
            <Task
              key={index}
              task={task}
              onDelete={onDelete}
              // onToggle={onToggle}
              onCheck={onCheck}
              isCompleted={true}
            />
          );
        }
      })}
    </div>
  );
};

export default Completed;
