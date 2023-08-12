import { styled } from "styled-components";
import { MovieInfo } from "./Main";
import { Carousel } from "antd";

const Img = styled.img`
  width: 600px;
  height: 300px;
`;

const contentStyle: React.CSSProperties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const CarouselContainer = styled.div`
  width: 600px;
  margin: auto;
`;

export default function CarouselImg({ slide }: { slide: MovieInfo[] }) {
  return (
    <CarouselContainer>
      <Carousel autoplay>
        {slide.map((item) => {
          return (
            <Img
              style={contentStyle}
              src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
              alt="NONE"
            />
          );
        })}
      </Carousel>
    </CarouselContainer>
  );
}
