import { styled } from "styled-components";
import { useEffect, useState } from "react";
import Image from "../common/Image";

const SliderDiv = styled.div``;

const MoviesDiv = styled.div``;

export interface Genres {
  id: number;
  name: string;
}

export interface MovieInfo {
  original_title: string;
  backdrop_path: string;
}

function Main() {
  const [Movies, setMovies] = useState<[MovieInfo[], number][]>([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMGM0ZmNiNGVkOTQyNTUxYTAzZjRkYTNjNGY2NmIxNSIsInN1YiI6IjY0YmE3YWUwYWI2ODQ5MDEzOTE1NGY5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AnwgIaJa2kemgPHB2e0sbEN2jxRXDgbKhggk6YQXFlI",
      },
    };

    if (Movies.length <= 30) {
      fetch("https://api.themoviedb.org/3/genre/movie/list", options)
        .then((response) => response.json())
        .then((response) => {
          const movieGenres = response.genres;

          const options2 = {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMGM0ZmNiNGVkOTQyNTUxYTAzZjRkYTNjNGY2NmIxNSIsInN1YiI6IjY0YmE3YWUwYWI2ODQ5MDEzOTE1NGY5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AnwgIaJa2kemgPHB2e0sbEN2jxRXDgbKhggk6YQXFlI",
            },
          };
          //장르별 영화 출력
          // eslint-disable-next-line array-callback-return
          movieGenres.map((genres: Genres) => {
            fetch(
              `https://api.themoviedb.org/3/discover/movie?with_genres=${genres.id}`,
              options2
            )
              .then((response) => response.json())
              .then((response) => {
                setMovies((prev) => [...prev, [response.results, genres.id]]);
              })
              .catch((err) => console.error(err));
          });
        })
        .catch((err) => console.error(err));
    }
  }, []);

  return (
    <div>
      <SliderDiv>{/* 인기있는 영화 : 장르별로 다시 받기 */}</SliderDiv>

      <MoviesDiv>
        {Movies.map(([movies, genreId], i) => (
          <div key={i}>
            <h2>Genre ID: {genreId}</h2>
            {movies.map((movie: MovieInfo, j: number) => (
              <Image key={j} url={movie.backdrop_path} />
            ))}
          </div>
        ))}
      </MoviesDiv>
    </div>
  );
}

export default Main;

// 1. 메인에서 슬라이드 컴포넌트에 영화 5개만 보내기 : 필터 몰라
// 2. 이미지 컴포넌트 갈 떄, 장르별로 보내기 : 손도 못댐
// backdrop_path, genres_id, id
