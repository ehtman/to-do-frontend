function TaskItem({ task, index, toggleTask }) {
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
    </div>
  );
}

export default TaskItem;