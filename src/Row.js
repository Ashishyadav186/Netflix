/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import axios from "axios";

function Row({ title }) {
  // eslint-disable-next-line no-unused-vars
  const [movies, setMovies] = useState([]);
  //we need a snippet of code that runs on a speicific condition
  useEffect(() => {
    // if[], run once when the row loads, and don't run again
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.log(movies);

  return (
    <div classname="row">
      <h2>{title}</h2>
      <div classname="row_posters">
        {/* map through each movie in movies array to display poster image*/}
        (movies.map(movie => (
        <img src={movie.poster_Path} alt="{movie.originalTitle}" />
        )))
      </div>
    </div>
  );
}

export default Row;
