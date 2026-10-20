
function Navbar() {
  return (
    <nav className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-violet-600">
        TaskFlow
      </h1>

      <p className="text-gray-500 text-sm hidden sm:block">
        Plan your day. Get things done.
      </p>
    </nav>
  );
}

export default Navbar;
