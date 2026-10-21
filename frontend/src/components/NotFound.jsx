import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-indigo-600">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-bold text-gray-800">
          Page Not Found
        </h2>

        <p className="mt-3 text-gray-500">
          Oops! The page you are looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="inline-block mt-6 rounded-lg bg-indigo-600 px-6 py-3
          text-white font-semibold transition hover:bg-indigo-700"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;