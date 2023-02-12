import Task from './Task';

const Tasks = ({ tasks, onDelete, onToggle, onCheck }) => {
  console.log('lenn', tasks.length);

  return (
    <>
      <h3>Active:</h3>
      {tasks.map((task, index) => {
        if (task.status === 'active') {
          return (
            <Task
              key={index}
              task={task}
              onDelete={onDelete}
              onToggle={onToggle}
              onCheck={onCheck}
              isCompleted={false}
            />
          );
        }
      })}
    </>
  );
};

export default Tasks;
