import { styled } from "styled-components";
import { useEffect, useState } from "react";
import { API_URL, API_KEY } from "../Config";
import Detail from "../detail/Detail";

const MoviesDiv = styled.div``;

export interface movieInfo {
  id: number;
  title: string;
  overview: string;
  vote_average: number;
  backdrop_path: string;
}

function Main() {
  const [Movies, setMovies] = useState<movieInfo[]>([]);
  // const [MainMovieImage, setMainMovieImage] = useState();

  useEffect(() => {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

    fetch(endpoint)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setMovies([...response.results]);
        // setMainMovieImage(MainMovieImage || response.results[0]);
      });
  }, []);

  console.log(Movies);

  return (
    <MoviesDiv>
      {Movies.map((movie: movieInfo) => (
        <Detail key={movie.id} Info={movie} />
      ))}
    </MoviesDiv>
  );
}

export default Main;
