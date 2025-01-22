import React, { useRef } from "react";
import { NavLink } from "react-router-dom";

const Gallery = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -250, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 250, behavior: "smooth" });
    }
  };

  return (
    <div className="mt-20 relative">
    
  

      {/* Scrollable Container */}
      <div
        ref={scrollContainerRef}
        className="flex md:justify-center gap-6 overflow-x-auto scrollbar-hide whitespace-nowrap px-6 py-3 shadow-lg rounded-md bg-gray-100"
      >
        <NavLink
          to="/gallery/front-exterior"
          className={({ isActive }) =>
            `block px-8 py-3 min-w-max rounded-lg   ${
              isActive ? "bg-rose-500 text-white" : "text-gray-800"
            }`
          }
        >
          Front Exterior
        </NavLink>
        <NavLink
          to="/gallery/lobby"
          className={({ isActive }) =>
            `block px-8 py-3 min-w-max rounded-lg  transition-all ${
              isActive ? "bg-rose-500 text-white" : "text-gray-800"
            }`
          }
        >
          Hotel Lobby
        </NavLink>
        <NavLink
          to="/gallery/dining"
          className={({ isActive }) =>
            `block px-8 py-3 min-w-max rounded-lg  ${
              isActive ? "bg-rose-500 text-white" : "text-gray-800"
            }`
          }
        >
          Dining
        </NavLink>
        <NavLink
          to="/gallery/spa"
          className={({ isActive }) =>
            `block px-8 py-3 min-w-max rounded-lg  ${
              isActive ? "bg-rose-500 text-white" : "text-gray-800"
            }`
          }
        >
          Spa
        </NavLink>
        <NavLink
          to="/gallery/pool"
          className={({ isActive }) =>
            `block px-8 py-3 min-w-max rounded-lg  ${
              isActive ? "bg-rose-500 text-white" : "text-gray-800"
            }`
          }
        >
          Pool
        </NavLink>
      </div>
    </div>
  );
};

export default Gallery;
