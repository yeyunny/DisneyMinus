import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Image from "../common/Image";
import { MovieInfo } from "../main/Main";

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
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w200/${details?.backdrop_path}`}
        alt="NONE"
      />
      <h2>{details?.original_title}</h2>
      <p>{details?.overview}</p>
      <Image movie={movieList} genreId={genreId} />
    </div>
  );
}

export default Detail;
