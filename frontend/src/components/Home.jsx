
import TaskList from "./TaskList";

function Home({ tasks, openForm, toggleTask, refreshTasks, deleteTask }) {
  return (
    <div className="max-w-4xl mx-auto p-6 sm:p-10">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            My Tasks
          </h1>

          <p className="text-gray-500 mt-2">
            Organize your day, one task at a time.
          </p>
        </div>

        <button
          onClick={openForm}
          className="bg-violet-600 text-white px-4 py-3 rounded-xl hover:bg-violet-700"
        >
          + Add Task
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">
            Your Tasks ({tasks.length})
          </h2>

          <button
            onClick={refreshTasks}
            className="flex items-center gap-2 bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700 transition"
          >
            <span>↻</span>
            Refresh
          </button>
        </div>

        {tasks.length === 0 ? (
          <p className="text-gray-500 text-center py-10">
            No tasks yet. Click Add Task to get started!
          </p>
        ) : (
          <TaskList
            tasks={tasks}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
