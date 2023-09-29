import React from "react";
import sidebarData from "../../sidebarData";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="sidebar-container">
      <ul className="nav-list">
        {sidebarData.map((item, index) => {
          return (
            <li className="nav-item" key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  ["nav-link", isActive ? "active" : null].join("")
                }
              >
                <span>{item.title}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Header;
