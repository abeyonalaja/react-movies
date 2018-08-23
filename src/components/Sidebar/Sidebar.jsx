import React from "react";
import { NavLink } from "react-router-dom";

export const Sidebar = props => (
  <div className="sidebar">
    <section>
      <div className="heading">Nav</div>
    </section>
    <section>
      <div className="heading">Links</div>
      <ul>
        <li>
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
      </ul>
    </section>
  </div>
);

export default Sidebar;
