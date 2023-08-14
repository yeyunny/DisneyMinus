import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Image from "../common/Image";
import { MovieInfo } from "../main/Main";
import { styled } from "styled-components";

const MoviesImg = styled.div``;

const MovieTitle = styled.p`
  color: white;
  font-size: 36px;
  font-weight: 800;
`;

const MovieDes = styled.p`
  color: white;
  font-size: 18px;
  font-weight: 400px;
`;

function Detail() {
  const params = useParams();

  const movieId = params.id;

  const [details, setDetails] = useState<MovieInfo | undefined>(undefined);

  const location = useLocation();
  const genreId = location.state;

  const [movieList, setMovieList] = useState<MovieInfo[]>([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMGM0ZmNiNGVkOTQyNTUxYTAzZjRkYTNjNGY2NmIxNSIsInN1YiI6IjY0YmE3YWUwYWI2ODQ5MDEzOTE1NGY5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AnwgIaJa2kemgPHB2e0sbEN2jxRXDgbKhggk6YQXFlI",
      },
    };

    fetch(`https://api.themoviedb.org/3/movie/${movieId}`, options)
      .then((response) => response.json())
      .then((response) => {
        setDetails(response);
      })
      .catch((err) => console.error(err));
  }, [movieId]);

  useEffect(() => {
    const MovieListOptions = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMGM0ZmNiNGVkOTQyNTUxYTAzZjRkYTNjNGY2NmIxNSIsInN1YiI6IjY0YmE3YWUwYWI2ODQ5MDEzOTE1NGY5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AnwgIaJa2kemgPHB2e0sbEN2jxRXDgbKhggk6YQXFlI",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}`,
      MovieListOptions
    )
      .then((response) => response.json())
      .then((response) => {
        setMovieList(response.results);
      })
      .catch((err) => console.log(err));
  }, [genreId]);

  if (!details) {
    return <div>Loading ...</div>;
  }

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <MoviesImg
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500/${details?.backdrop_path})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: " cover",
          width: "80%",
          height: "80%",
          opacity: "0.6",
        }}
      >
        <div>
          <MovieTitle>{details?.original_title}</MovieTitle>
          <MovieDes>{details?.overview}</MovieDes>
          <Image movie={movieList} genreId={genreId} />
        </div>
      </MoviesImg>
    </div>
  );
}

export default Detail;
