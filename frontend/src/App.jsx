import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddTask from "./components/AddTask";

const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);

  // Backend se tasks fetch karna
  async function refreshTasks() {
    try {
      const response = await fetch(API_URL);

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

  // Backend se task delete karna
  async function deleteTask(id) {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to delete task");
      }

      // Remove the deleted task from local React state using its _id
      setTasks((previousTasks) =>
        previousTasks.filter((task) => task._id !== id),
      );
    } catch (error) {
      console.error("Error deleting task:", error);
      alert(error.message);
    }
  }

  // App open hone par tasks fetch karna
  useEffect(() => {
    refreshTasks();
  }, []);

  async function addTask(task) {
    try {
      const response = await fetch(API_URL2, {
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

      setTasks((previousTasks) => [...previousTasks, data.task]);

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
        <AddTask addTask={addTask} goBack={() => setShowForm(false)} />
      ) : (
        <Home
          tasks={tasks}
          openForm={() => setShowForm(true)}
          toggleTask={toggleTask}
          refreshTasks={refreshTasks}
          deleteTask={deleteTask}
        />
      )}
    </div>
  );
}

export default App;
