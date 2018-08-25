import React, { Component } from "react";
import { Link } from "react-router-dom";
import { pageWithoutLayout, pageWithLayout } from "../../containers/page";
import { discover } from "../../data/api/movies";
import { Poster } from "../../components/Poster/Poster";

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
    const { movieConfig } = this.props;
    return (
      <div className="home">
        <h2>Welcome home</h2>
        {movies &&
          movies.map(movie => (
            <Poster key={movie.id} movieConfig={movieConfig} {...movie} />
          ))}

        <Link to="/about">About us</Link>
      </div>
    );
  }
}

export default pageWithLayout(pageWithoutLayout(Home));
