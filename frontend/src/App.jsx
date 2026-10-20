
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);

  // Backend se tasks fetch karna
  async function refreshTasks() {
    try {
      const response = await fetch("http://localhost:5000/todo");

      if (!response.ok) {
        throw new Error("Failed to fetch tasks");
      }

      const data = await response.json();

      console.log("Tasks refreshed:", data);

      setTasks(data.tasks);
    } catch (error) {
      console.error("Refresh failed:", error);
    }
  }

  // App open hone par tasks fetch karna
  useEffect(() => {
    refreshTasks();
  }, []);

  async function addTask(task) {
    try {
      const response = await fetch("http://localhost:5000/todo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to add task");
      }

      setTasks((previousTasks) => [
        ...previousTasks,
        data.task,
      ]);

      setShowForm(false);
    } catch (error) {
      console.error("Error adding task:", error);
      alert(error.message);
    }
  }

  function toggleTask(index) {
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        return {
          ...task,
          completed: !task.completed,
        };
      }

      return task;
    });

    setTasks(updatedTasks);
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {showForm ? (
        <AddTask
          addTask={addTask}
          goBack={() => setShowForm(false)}
        />
      ) : (
        <Home
          tasks={tasks}
          openForm={() => setShowForm(true)}
          toggleTask={toggleTask}
          refreshTasks={refreshTasks}
        />
      )}
    </div>
  );
}

export default App;
