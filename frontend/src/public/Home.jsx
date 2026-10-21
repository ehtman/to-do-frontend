
import { Link } from "react-router-dom";


// a tag refresh entire page
function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-5 md:px-16">
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          ✓ TaskFlow
        </Link>

        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="font-medium hover:text-indigo-600"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="rounded-lg bg-indigo-600 px-5 py-2.5
              font-medium text-white transition hover:bg-indigo-700"
          >
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="mx-auto grid max-w-7xl items-center
        gap-12 px-6 py-16 md:grid-cols-2 md:px-16 md:py-24">

        <section>
          <span className="rounded-full bg-indigo-100 px-4 py-2
            text-sm font-medium text-indigo-700">
            YOUR DAY, ORGANIZED
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight
            tracking-tight md:text-6xl">
            Organize your tasks.
            <span className="block text-indigo-600">
              Simplify your life.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
            Manage your daily tasks, stay focused, and achieve
            more with a simple and powerful todo app.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/signup"
              className="rounded-xl bg-indigo-600 px-6 py-3
                font-semibold text-white shadow-lg shadow-indigo-200
                transition hover:-translate-y-0.5 hover:bg-indigo-700"
            >
              Get Started Free →
            </Link>

            <Link
              to="/login"
              className="rounded-xl border border-slate-300
                bg-white px-6 py-3 font-semibold
                transition hover:border-indigo-500 hover:text-indigo-600"
            >
              Login
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-500">
            <span>✓ Easy task management</span>
            <span>✓ Simple and clean UI</span>
          </div>
        </section>

        {/* Task Preview */}
        <section className="rounded-3xl border border-slate-200
          bg-white p-6 shadow-xl shadow-slate-200/60 md:p-8">

          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">My Tasks</h2>
              <p className="mt-1 text-sm text-slate-500">
                A little progress every day.
              </p>
            </div>

            <span className="rounded-xl bg-indigo-100 p-3 text-2xl">
              📋
            </span>
          </div>

          <div className="mt-8 space-y-4">
            {[
              { title: "Complete project assignment", done: true },
              { title: "Learn React and Tailwind", done: false },
              { title: "Plan tomorrow's tasks", done: false },
            ].map((task) => (
              <div
                key={task.title}
                className="flex items-center gap-3 rounded-xl
                  border border-slate-100 p-4"
              >
                <span className={task.done
                  ? "text-xl text-indigo-600"
                  : "text-xl text-slate-400"}
                >
                  {task.done ? "✓" : "○"}
                </span>

                <span className={task.done
                  ? "text-slate-400 line-through"
                  : "font-medium text-slate-700"}
                >
                  {task.title}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl bg-indigo-50 p-4">
            <p className="font-medium text-indigo-800">
              Small steps lead to big achievements.
            </p>
            <p className="mt-1 text-sm text-indigo-600">
              Sign up to start managing your own tasks.
            </p>
          </div>
        </section>
      </main>

      {/* Features */}
      <section className="border-t border-slate-200 bg-white px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold">
            Everything you need to stay organized
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: "📝",
                title: "Manage Tasks",
                desc: "Add, update, complete, and delete your tasks.",
              },
              {
                icon: "🎯",
                title: "Stay Focused",
                desc: "Keep your daily goals clear and organized.",
              },
              {
                icon: "🔐",
                title: "Personal Workspace",
                desc: "Sign in to access your own todo workspace.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-slate-200
                  p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-3xl">{feature.icon}</span>
                <h3 className="mt-4 text-xl font-semibold">
                  {feature.title}
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} TaskFlow. Stay organized.
      </footer>
    </div>
  );
}

export default Home;
