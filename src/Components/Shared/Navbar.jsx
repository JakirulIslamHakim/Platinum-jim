import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
       <NavLink to={'/'} >Home</NavLink>
      </li>
      <li>
       <NavLink to={'/gallery'} >Gallery</NavLink>
      </li>
      <li>
       <NavLink to={'/trainer'} >Trainer</NavLink>
      </li>
      <li>
       <NavLink to={'/classes'} >Classes</NavLink>
      </li>
      <li>
       <NavLink to={'/dashboard'} >Dashboard</NavLink>
      </li>
      <li>
       <NavLink to={'/community'} >Community</NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-black bg-opacity-25 absolute left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto">
        <nav className="navbar">
          <div className="navbar-start ">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost bg-red-500 lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navLinks}
              </ul>
            </div>
            <div className="px-2 mx-2  w-16 lg:w-20 ">
              <img
                className="w-full rounded-full lg:ml-6"
                src="https://i.ibb.co/GJP5nHh/Jim-Logo2-2.png"
                alt=""
              />
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-white font-semibold ">{navLinks}</ul>
          </div>
          <div className="navbar-end ">
            <Link to={'/login'} className="btn">Login</Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
