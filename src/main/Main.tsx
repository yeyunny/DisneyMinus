import { useEffect, useState } from "react";
import { API_URL, API_KEY } from "../Config";
import { response } from "express";

function Main() {
  const [Movies, setMovies] = useState([]);
  const [MainMovieImage, setMainMovieImage] = useState();

  useEffect(() => {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

    fetch(endpoint)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        // setMovies([...response.results]);
        setMainMovieImage(MainMovieImage || response.results[0]);
      });
  }, []);

  return (
    <div>
      <p>Main</p>
    </div>
  );
}

export default Main;
