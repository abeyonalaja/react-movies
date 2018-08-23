import React from "react";
import { Link } from "react-router-dom";

export const Sidebar = props => (
  <div className="sidebar">
    <section>
      <div className="heading">Nav</div>
    </section>
    <section>
      <div className="heading">Links</div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </section>
  </div>
);

export default Sidebar;
