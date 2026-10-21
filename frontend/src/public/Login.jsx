
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL_Two;
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


async function handleSubmit(e) {
  e.preventDefault();

  try {
    const response = await fetch(`${VITE_API_URL_Two}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.message || "Login failed");
      return;
    }

    // Save token returned by backend
    localStorage.setItem("token", data.token);

    alert("Login successful!");

    navigate("/todo");
  } catch (error) {
    console.error("Login error:", error);
    alert("Unable to connect to server");
  }
}


  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-10">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <Link to="/" className="text-xl font-bold text-indigo-600">
          ✓ TaskFlow
        </Link>

        <h1 className="mt-8 text-3xl font-bold text-gray-800">
          Welcome back!
        </h1>
        <p className="mt-2 text-gray-500">
          Login to manage your daily tasks.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="font-semibold text-indigo-600 hover:underline"
          >
            Sign up
          </Link>
        </p>

        <Link
          to="/"
          className="mt-5 block text-center text-sm text-gray-500 hover:text-indigo-600"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

export default Login;
