import React from "react";
// import { moviesData } from "../moviesData";
import { API_URL, API_KEY } from "../utils/utils";
import MovieItem from "./MovieItem";
import MovieTabs from "./MovieTabs";
import Pagination from "./Pagination";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      moviesWillWatch: [],
      sortBy: "popularity.desc",
      totalPages: 0,
      pageNumber: 498,
    };
  }
  getFetch = () => {
    fetch(
      `${API_URL}discover/movie?api_key=${API_KEY}&sort_by=${this.state.sortBy}&page=${this.state.pageNumber}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ movies: data.results, totalPages: data.total_pages });
      });
  };

  componentDidMount() {
    this.getFetch();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.sortBy !== this.state.sortBy) {
      this.setState({ pageNumber: 1 });
      this.getFetch();
    }
    if (prevState.pageNumber !== this.state.pageNumber) {
      this.getFetch();
    }
  }

  removeMovie = (movie) => {
    console.log("I was clicked");
    // const updatedMovie = this.state.movies.filter(function (item) {
    //   return item.id !== movie.id;
    // });
    // // console.log(this.state.movies);
    // // debugger;
    // this.setState({ movies: updatedMovie });
    // console.log("deleted", movie.id);

    this.setState((prev) => {
      return {
        movies: prev.movies.filter((item) => item.id !== movie.id),
      };
    });
    // console.log(this.state);
  };
  addMoviesToWillWatch = (movie) => {
    console.log("I was clicked");
    const updatedWillWatch = [...this.state.moviesWillWatch, movie];

    this.setState({ moviesWillWatch: updatedWillWatch });
  };
  removeMoviesToWillWatch = (movie) => {
    const updatedMoviesToWillWatch = this.state.moviesWillWatch.filter(
      function (item) {
        return item.id !== movie.id;
      }
    );

    this.setState({ moviesWillWatch: updatedMoviesToWillWatch });
  };
  updateSortBy = (value) => {
    this.setState({ sortBy: value });
  };
  updatePageNumber = (value) => {
    this.setState({ pageNumber: value });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-9 mt-4">
            <div className="row">
              <div className="col-12 mb-4">
                <MovieTabs
                  sortBy={this.state.sortBy}
                  updateSortBy={this.updateSortBy}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12 mb-4">
                <Pagination
                  pageNumber={this.state.pageNumber}
                  totalPage={this.state.totalPages}
                  updatePageNumber={this.updatePageNumber}
                />
              </div>
            </div>
            <div className="row">
              {this.state.movies.map((movie) => {
                return (
                  <div className="col-6 mb-4" key={`k_${movie.id}`}>
                    <MovieItem
                      movie={movie}
                      removeMovie={this.removeMovie}
                      addMoviesToWillWatch={this.addMoviesToWillWatch}
                      removeMoviesToWillWatch={this.removeMoviesToWillWatch}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-3 mt-4">
            <p>Will Watch: {this.state.moviesWillWatch.length}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
