import React from "react";
import { Link } from "react-router-dom";
import { pageWithLayout } from "../../containers/page";
import { discover } from "../../data/api/movies";

export const Home = props => (
  <div className="home">
    <h2>Welcome home</h2>
    <button onClick={() => discover()}>Discover</button>
    <Link to="/about">About</Link>
  </div>
);

export default pageWithLayout(Home);
