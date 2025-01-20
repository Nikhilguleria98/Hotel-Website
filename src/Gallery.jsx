import React from "react";
import { NavLink, Link } from "react-router-dom";
import picture from "./assets/images/hotel 1.jpg";
import pool from "./assets/images/pool.jpg";
import swimming from "./assets/images/swimming.jpg";
import hotelrooms1 from "./assets/images/hotel room 1.jpg";

const Gallery = () => {
  return (
    <div className="mt-24 ">
      <ul className="flex justify-center gap-6 text-xl border p-3 h-full shadow-lg shadow-black">
        <li>
          <NavLink
            to="/gallery/front-exterior"
            className={({ isActive }) =>
              `hover:text-rose-500 duration-200 hover:scale-110 text-lg ${
                isActive ? "text-rose-500 " : ""
              }`
            }
          >
            Front Exterior
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/gallery/lobby"
            className={({ isActive }) =>
              `hover:text-rose-500 duration-200 hover:scale-110 text-lg ${
                isActive ? "text-rose-500 " : ""
              }`
            }
          >
            Hotel Lobby
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/gallery/dining"
            className={({ isActive }) =>
              `hover:text-rose-500 duration-200 hover:scale-110 text-lg ${
                isActive ? "text-rose-500 " : ""
              }`
            }
          >
            Dinnig
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/gallery/spa"
            className={({ isActive }) =>
              `hover:text-rose-500 duration-200 hover:scale-110 text-lg ${
                isActive ? "text-rose-500 " : ""
              }`
            }
          >
            Spa
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/gallery/pool"
            className={({ isActive }) =>
              `hover:text-rose-500 duration-200 hover:scale-110 text-lg ${
                isActive ? "text-rose-500 " : ""
              }`
            }
          >
            Pool
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Gallery;
