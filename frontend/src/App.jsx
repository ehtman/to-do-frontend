import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddTask from "./components/AddTask";
import PublicHome from "./public/Home";
const API_URL = import.meta.env.VITE_API_URL;
import { Route, Routes } from "react-router-dom";
import Login from "./public/Login";
import Signup from "./public/Signup";
import NotFound from "./components/NotFound";

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
      const response = await fetch(API_URL, {
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
      <Routes>
        <Route path="/" element={<PublicHome />} />
        <Route
          path="/todo"
          element={
            <>
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
            </>
          }
        />
          <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
