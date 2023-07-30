import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Image from "../common/Image";

interface DetailInfo {
  id: number;
  original_title: string;
  overview: string;
  backdrop_path: string;
}

function Detail() {
  const params = useParams();

  const movieId = params.id;

  const navigate = useNavigate();

  const [details, setDetails] = useState<DetailInfo | null>(null);

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
  }, []);
  console.log(details);

  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w200/${details?.backdrop_path}`}
        alt="NONE"
      />
      <h2>{details?.original_title}</h2>
      <p>{details?.overview}</p>
      <div>
        <Image movie={[]} />
      </div>
    </div>
  );
}

export default Detail;
