import React from "react";
const defaultImageUrl = "/wwemzKWzjKYJFfCeiB57q3r4Bcm.png";

class MovieItem extends React.Component {
  constructor() {
    super();
    this.state = { willWatch: false };
  }
  render() {
    const {
      movie,
      removeMovie,
      addMoviesToWillWatch,
      removeMoviesToWillWatch,
    } = this.props;
    return (
      <div className="card">
        <img
          alt={movie.title}
          className="card-img-top"
          src={`https://image.tmdb.org/t/p/w500${
            movie.backdrop_path || movie.poster_path || defaultImageUrl
          }`}
        />
        <div className="card-body">
          <h6 className="card-title">{movie.title}</h6>
          <div className="d-flex justify-content-between aling-items-center">
            <p className="mb-0">Rating: {movie.vote_average}</p>
            <button
              type="button"
              className={
                !this.state.willWatch ? "btn btn-secondary" : "btn btn-success"
              }
              onClick={() => {
                this.setState((prev) => {
                  return { willWatch: !prev.willWatch };
                });
                this.state.willWatch
                  ? removeMoviesToWillWatch(movie)
                  : addMoviesToWillWatch(movie);
              }}
            >
              {this.state.willWatch ? "Remove Will Watch" : "Will Watch"}
            </button>
          </div>
          <button type="button" onClick={removeMovie.bind(null, movie)}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}
export default MovieItem;
