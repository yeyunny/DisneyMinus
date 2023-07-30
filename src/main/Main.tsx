import { styled } from "styled-components";
import { useEffect, useState } from "react";
import Image from "../common/Image";
import Slider from "./Slider";
import { useNavigate } from "react-router-dom";

const SliderDiv = styled.div`
  height: 300px;
`;

const MoviesDiv = styled.div``;

const GenresDiv = styled.div`
  height: 400px;
`;

export interface Genres {
  id: number;
  name: string;
}

export interface MovieInfo {
  id: number;
  genreId: number;
  backdrop_path: string;
}

function Main() {
  const [Slide, setSlide] = useState<MovieInfo[][]>([]);
  const [Movies, setMovies] = useState<[MovieInfo[], number][]>([]);

  const navigate = useNavigate();

  const goToDetail = (id: number) => {
    navigate(`/detail/${id}`);
  };

  useEffect(() => {
    //Slider 사진
    const Slideroptions = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMGM0ZmNiNGVkOTQyNTUxYTAzZjRkYTNjNGY2NmIxNSIsInN1YiI6IjY0YmE3YWUwYWI2ODQ5MDEzOTE1NGY5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AnwgIaJa2kemgPHB2e0sbEN2jxRXDgbKhggk6YQXFlI",
      },
    };

    if (Slide.length <= 0) {
      fetch(
        "https://api.themoviedb.org/3/discover/movie?primary_release_year=10",
        Slideroptions
      )
        .then((response) => response.json())
        .then((response) => {
          const slideImg = response.results.slice(0, 5);

          setSlide((prev) => [...prev, slideImg]);
        })
        .catch((err) => console.error(err));
    }
    // movie 사진
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
      <SliderDiv>
        {Slide.map((slide: MovieInfo[], i) => (
          <div key={i}>
            {slide.slice(0, 5).map((imgUrl: MovieInfo, j: number) => {
              return <Slider key={j} url={imgUrl.backdrop_path} />;
            })}
          </div>
        ))}
      </SliderDiv>

      <MoviesDiv>
        {Movies.map(
          ([movies, genreId]: [movies: MovieInfo[], genreId: number], i) => {
            return (
              <GenresDiv>
                <span>Genre ID: {genreId}</span>
                <Image key={i} movie={movies} />
              </GenresDiv>
            );
          }
        )}
      </MoviesDiv>
    </div>
  );
}

export default Main;
