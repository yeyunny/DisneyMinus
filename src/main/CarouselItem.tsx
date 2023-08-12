import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { styled } from "styled-components";

const Img = styled.img``;

export default function CarouselItem({ url }: { url: string }) {
  const settings = {
    dots: true,
    infinite: true,
  };
  return (
    <div>
      <Slider {...settings}>
        <Img src={`https://image.tmdb.org/t/p/w200${url}`} alt="NONE" />
      </Slider>
    </div>
  );
}
