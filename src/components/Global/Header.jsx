import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="fixed top-0 z-50 border-b">
        <div className=" flex-wrap md:justify-around justify-between md:p-3 px-10 py-3 h-fit w-screen items-center bg-white text-gray-500 flex opacity-95">
          <div>
            <p className="text-xl font-bold text-rose-500"> Grand Hotel</p>
          </div>
          <div>
            <ul className="hidden md:flex gap-5">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `hover:text-rose-500 duration-200 hover:scale-110 text-lg ${
                      isActive ? "text-rose-500 " : ""
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `hover:text-rose-500 duration-200 text-lg ${
                      isActive ? "text-rose-500" : ""
                    }`
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/room"
                  className={({ isActive }) =>
                    `hover:text-rose-500 duration-200 text-lg ${
                      isActive ? "text-rose-500" : ""
                    }`
                  }
                >
                  Room
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Blog"
                  className={({ isActive }) =>
                    `hover:text-rose-500 duration-200 text-lg ${
                      isActive ? "text-rose-500" : ""
                    }`
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `hover:text-rose-500 duration-200 text-lg ${
                      isActive ? "text-rose-500" : ""
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/gallery"
                  className={({ isActive }) =>
                    `hover:text-rose-500 duration-200 text-lg ${
                      isActive ? "text-rose-500" : ""
                    }`
                  }
                >
                  Gallery
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="hidden md:flex gap-3">
            <NavLink
              to="/Login"
              className={({ isActive }) =>
                `  flex justify-center items-center text-lg hover:bg-slate-200 duration-200 p-3 rounded-lg ${
                  isActive ? "text-rose-500" : ""
                }`
              }
            >
              Login
            </NavLink>

            <NavLink>
              <div className="flex text-xl rounded-md w-12 justify-center h-10 items-center shadow-md shadow-gray-400 text-black">
                <FaShoppingCart />
              </div>
            </NavLink>
          </div>

          <button
            className="text-2xl flex justify-center items-center md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? "" : <IoMenu />}
          </button>
        </div>

        {isMenuOpen && (
          <>
            <div className="w-64 h-fit hover:shadow-lg hover:shadow-rose-400 duration-200 bg-gray-200 text-gray-700 opacity-95 px-5 p-7 fixed top-16 right-5 space-y-10 md:hidden ">
              <div>
                <ul className="space-y-5">
                  <div className="flex text-2xl rounded-md w-12 justify-center h-10 items-center shadow-md shadow-gray-400 text-black">
                    <FaShoppingCart />
                  </div>
                  <div className="flex flex-col gap-2 justify-center">
                    <NavLink
                      to="/"
                      onClick={toggleMenu}
                      className={({ isActive }) =>
                        ` hover:text-rose-500  hover:bg-slate-300 duration-200 ${
                          isActive ? "text-rose-500 " : ""
                        }`
                      }
                    >
                      <li className="hover:bg-slate-300 p-2  cursor-pointer">
                        Home
                      </li>
                    </NavLink>
                    <NavLink
                      to="/about"
                      onClick={toggleMenu}
                      className={({ isActive }) =>
                        `hover:text-rose-500 hover:bg-slate-300 duration-200 ${
                          isActive ? "text-rose-500 " : ""
                        }`
                      }
                    >
                      <li className="hover:bg-slate-300 p-2  cursor-pointer">
                        About Us
                      </li>
                    </NavLink>

                    <NavLink
                      to="/room"
                      onClick={toggleMenu}
                      className={({ isActive }) =>
                        `hover:text-rose-500 hover:bg-slate-300 duration-200 ${
                          isActive ? "text-rose-500 " : ""
                        }`
                      }
                    >
                      <li className="hover:bg-slate-300 p-2  cursor-pointer">
                        Room
                      </li>
                    </NavLink>

                    <NavLink
                      to="/blog"
                      onClick={toggleMenu}
                      className={({ isActive }) =>
                        `hover:text-rose-500 hover:bg-slate-300  ${
                          isActive ? "text-rose-500 " : ""
                        }`
                      }
                    >
                      <li className="hover:bg-slate-300 p-2  cursor-pointer">
                        Blog
                      </li>
                    </NavLink>
                    <NavLink
                      to="/contact"
                      onClick={toggleMenu}
                      className={({ isActive }) =>
                        `hover:text-rose-500 hover:bg-slate-300 duration-200 ${
                          isActive ? "text-rose-500 " : ""
                        }`
                      }
                    >
                      <li className="hover:bg-slate-300 p-2  cursor-pointer">
                        Contact
                      </li>
                    </NavLink>
                  </div>

                  <div className=" md:flex gap-3 space-y-5">
                    <NavLink
                      to="/login"
                      onClick={toggleMenu}
                      className={({ isActive }) =>
                        `  flex justify-center items-center text-lg hover:bg-slate-300 duration-200 p-3 rounded-lg ${
                          isActive ? "text-rose-500 " : ""
                        }`
                      }
                    >
                      Login
                    </NavLink>

                    <NavLink
                      to="/signin"
                      onClick={toggleMenu}
                      className={({ isActive }) =>
                        `text-lg hover:bg-gray-300  flex justify-center items-center   duration-200 p-3 rounded-lg ${
                          isActive ? "text-white bg-rose-500" : ""
                        }`
                      }
                    >
                      Sign in
                    </NavLink>
                  </div>
                  <button
                    className="text-2xl flex justify-center items-center md:hidden absolute top-2 right-10 "
                    onClick={toggleMenu}
                  >
                    {isMenuOpen ? <IoClose /> : ""}
                  </button>
                </ul>
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
