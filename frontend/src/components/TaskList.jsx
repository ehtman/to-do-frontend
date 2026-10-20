import TaskItem from "./TaskItem";

function TaskList({ tasks, toggleTask }) {
  return (
    <div>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          index={index}
          toggleTask={toggleTask}
        />
      ))}
    </div>
  );
}

export default TaskList;