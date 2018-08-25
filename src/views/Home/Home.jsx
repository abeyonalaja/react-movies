import React, { Component } from "react";
import { Link } from "react-router-dom";
import { pageWithLayout } from "../../containers/page";
import { discover } from "../../data/api/movies";

export class Home extends Component {
  state = { movies: [] };

  componentDidMount() {
    discover().then(({ movies }) => {
      // console.log(movies);
      this.setState({ movies });
    });
  }
  render() {
    const { movies } = this.state;
    return (
      <div className="home">
        <h2>Welcome home</h2>
        <button>Discover</button>
        <pre>{JSON.stringify(movies, null, 2)}</pre>

        <Link to="/about">About us</Link>
      </div>
    );
  }
}

export default pageWithLayout(Home);
