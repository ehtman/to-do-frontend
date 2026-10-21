function TaskItem({ task, index, toggleTask, deleteTask }) {
  return (
    <div className="flex items-center gap-3 border-b border-gray-100 py-4">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(index)}
        className="h-5 w-5 accent-violet-600 cursor-pointer"
      />

      <p
        className={`flex-1 ${
          task.completed
            ? "line-through text-gray-400"
            : "text-gray-700"
        }`}
      >
        {task.title}
      </p>

      <button
        onClick={() => deleteTask(task._id)}
        className="text-red-500 hover:text-red-700 p-2 rounded-lg hover:bg-red-50 transition"
        title="Delete task"
      >
        🗑️
      </button>
      
    </div>
  );
}

export default TaskItem;