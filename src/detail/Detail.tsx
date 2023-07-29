import { useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const params = useParams();

  const movieId = params.movieId;

  const [details, setDetails] = useState([]);

  const DetailOptions = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMGM0ZmNiNGVkOTQyNTUxYTAzZjRkYTNjNGY2NmIxNSIsInN1YiI6IjY0YmE3YWUwYWI2ODQ5MDEzOTE1NGY5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AnwgIaJa2kemgPHB2e0sbEN2jxRXDgbKhggk6YQXFlI",
    },
  };

  fetch(`https://api.themoviedb.org/3/discover/movie/${movieId}`, DetailOptions)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
    })
    .catch((err) => console.error(err));

  return <div>Detail {movieId}</div>;
}

export default Detail;
