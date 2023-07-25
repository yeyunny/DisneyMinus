import { styled } from "styled-components";
import { useEffect, useState } from "react";
import { API_URL, API_KEY } from "../Config";
import Image from "./Image";

const MoviesDiv = styled.div``;

export interface movieInfo {
  id: number;
  backdrop_path: string;
}

function Main() {
  const [Movies, setMovies] = useState<movieInfo[]>([]);

  useEffect(() => {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

    fetch(endpoint)
      .then((response) => response.json())
      .then((response) => {
        console.log(endpoint);
        setMovies([...response.results]);
      });
  }, []);

  return (
    <div>
      <MoviesDiv>
        {Movies.map((movie: movieInfo) => (
          <Image url={movie.backdrop_path} />
        ))}
      </MoviesDiv>
    </div>
  );
}

export default Main;
