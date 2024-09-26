const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
      : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";

  return (
    <nav className="bg-gradient-to-r from-sky-500 to-indigo-500 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <div class="thematic-nav bg-gray-200 py-2 text-center">
              <ul class="list-none ">
                <li class="inline-block mx-2">
                  <a
                    href="#"
                    class="no-underline text-white font-bold px-2.5 py-1 rounded-md transition duration-300 hover:bg-gray-300"
                  >
                    Categories by Niche
                  </a>
                </li>
                <li class="inline-block mx-2">
                  <a
                    href="#"
                    class="no-underline text-white font-bold px-2.5 py-1 rounded-md transition duration-300 hover:bg-gray-300"
                  >
                    Trending
                  </a>
                </li>
                <li class="inline-block mx-2">
                  <a
                    href="#"
                    class="no-underline text-white font-bold px-2.5 py-1 rounded-md transition duration-300 hover:bg-gray-300"
                  >
                    Resources
                  </a>
                </li>
                <li class="inline-block mx-2">
                  <a
                    href="#"
                    class="no-underline text-white font-bold px-2.5 py-1 rounded-md transition duration-300 hover:bg-gray-300"
                  >
                    Case Studies
                  </a>
                </li>
                <li class="inline-block mx-2">
                  <a
                    href="#"
                    class="no-underline text-white font-bold px-2.5 py-1 rounded-md transition duration-300 hover:bg-gray-300"
                  >
                    Community
                  </a>
                </li>
                <li class="inline-block mx-2">
                  <a
                    href="#"
                    class="no-underline text-white font-bold px-2.5 py-1 rounded-md transition duration-300 hover:bg-gray-300"
                  >
                    Courses
                  </a>
                </li>
                <li class="inline-block mx-2">
                  <a
                    href="#"
                    class="no-underline text-white font-bold px-2.5 py-1 rounded-md transition duration-300 hover:bg-gray-300"
                  >
                    Store
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
