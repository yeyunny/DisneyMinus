import { styled } from "styled-components";
import { useEffect, useState } from "react";
import { API_URL, API_KEY } from "../Config";
import Image from "../common/Image";
import Slider from "./Slider";

const SliderDiv = styled.div``;

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
      <SliderDiv>
        <Slider />
      </SliderDiv>

      <MoviesDiv>
        {/* 장르별로 보내기 : 장르별로 다시 받기 */}
        {Movies.map((movie: movieInfo) => (
          <Image url={movie.backdrop_path} />
        ))}
      </MoviesDiv>
    </div>
  );
}

export default Main;

// 1. 메인에서 슬라이드 컴포넌트에 영화 5개만 보내기 : 필터 몰라
// 2. 이미지 컴포넌트 갈 떄, 장르별로 보내기 : 손도 못댐
