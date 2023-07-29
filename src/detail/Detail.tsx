import { useParams } from "react-router-dom";

function Detail() {
  const params = useParams();
  const movieId = params.movieId;
  return <div>Detail {movieId}</div>;
}

export default Detail;
