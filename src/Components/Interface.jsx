import React, { Component } from "react";
import axios from "axios";
import Search from "./Search";
import Movies from "./Movies";

class Interface extends Component {
  state = {};
  async componentDidMount() {
    this.getMovies("future");
  }

  getMovies = async (searchTerm) => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${searchTerm}`,
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYjRhMjc2MDNiYWZmNzZlZTZiY2UzNDM0M2E1NjM1NyIsInN1YiI6IjY1Yzc5Nzk5NDM1MDExMDE4M2U4NTlkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AuX3oChPEmTAfZz_weexA9s6_7isrsP7dvHQ7QDwPMs`,
        },
      }
    );
    this.setState({ movies: data.results });
  };

  onSearchInput = (e) => {
    this.getMovies(e.target.value);
    console.log(this.state);
  };

  onSortSelect = (e) => {
    this.setState({ sortSelection: e.target.value });
  };

  render() {
    const { movies, sortSelection } = this.state;

    if (!movies) {
      return <p>Loading...</p>;
    }
    const sortedMovies = [...movies];

    if (sortSelection === "AZ") {
      sortedMovies.sort((a, b) => {
        if (a.original_title > b.original_title) {
          return 1;
        }

        if (b.original_title > a.original_title) {
          return -1;
        }
        return 0;
      });
    } else {
      sortedMovies.sort((a, b) => {
        if (a.original_title < b.original_title) {
          return 1;
        }

        if (b.original_title < a.original_title) {
          return -1;
        }
        return 0;
      });
    }

    console.log(movies, sortedMovies);
    return (
      <>
        <Search onSearchInput={this.onSearchInput} />
        {movies && (
          <Movies movies={sortedMovies} onSortSelect={this.onSortSelect} />
        )}
      </>
    );
  }
}

export default Interface;
