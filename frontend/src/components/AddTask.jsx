
import { useState } from "react";

function AddTask({ addTask, goBack }) {
  const [title, setTitle] = useState("");


async function handleSubmit(e) {
  e.preventDefault();

  if (title.trim() === "") {
    return;
  }

  await addTask({
    title: title.trim(),
    completed: false,
  });

  setTitle("");
}


  return (
    <div className="max-w-xl mx-auto p-6 sm:py-12">
      <button
        onClick={goBack}
        className="text-violet-600 font-semibold mb-6"
      >
        ← Back to Home
      </button>

      <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
        <h1 className="text-2xl font-bold text-gray-800">
          Add New Task
        </h1>

        <p className="text-gray-500 mt-2 mb-6">
          What would you like to accomplish?
        </p>

        <form onSubmit={handleSubmit}>
          <label className="block font-medium mb-2">
            Task title
          </label>

          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter your task..."
            className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
          />

          <button
            type="submit"
            className="w-full bg-violet-600 text-white rounded-xl p-3 mt-6 font-semibold hover:bg-violet-700"
          >
            Submit Task
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddTask;
