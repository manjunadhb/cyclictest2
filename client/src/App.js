import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  useEffect(() => {
    // axios.defaults.baseURL = `http://localhost:${PORT}`;
  }, []);

  let PORT = process.env.PORT || 5000;
  let [moviesList, setMoviesList] = useState([]);
  let getMoviesFromServer = async () => {
    let response = await axios.get("http://localhost:5000/moviesList");

    setMoviesList(response.data);
    console.log(response);
  };

  return (
    <div className="App">
      <h1>This is testing app {process.env.PORT}</h1>
      <button
        onClick={() => {
          getMoviesFromServer();
        }}
      >
        Get Movies
      </button>
      {moviesList.map((movie) => {
        return <h1>{movie}</h1>;
      })}
    </div>
  );
}

export default App;
