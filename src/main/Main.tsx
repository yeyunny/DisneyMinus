import { useEffect, useState } from "react";
import Image from "../common/Image";
import Carousel from "./CarouselImg";

export interface Genres {
  id: number;
  name: string;
}

export interface MovieInfo {
  id: number;
  genreId: number;
  original_title: string;
  overview: string;
  backdrop_path: string;
}

function Main() {
  const [Slide, setSlide] = useState<MovieInfo[][]>([]);
  const [Movies, setMovies] = useState<[MovieInfo[], number][]>([]);

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
  }, [Movies.length, Slide.length]);

  return (
    <div>
      <div>
        {Slide.map((slide: MovieInfo[], i) => (
          <Carousel key={i} slide={slide} />
        ))}
      </div>

      <div>
        {Movies.map(
          ([movies, genreId]: [movies: MovieInfo[], genreId: number], i) => {
            return (
              <div>
                <span>Genre ID: {genreId}</span>
                <Image key={i} genreId={genreId} movie={movies} />
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Main;
