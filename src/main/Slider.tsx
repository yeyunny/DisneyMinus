import { styled } from "styled-components";

const SliderContainer = styled.div``;

const Img = styled.img``;

export default function Slider({ url }: { url: string }) {
  return (
    <div>
      <SliderContainer>
        <Img src={`https://image.tmdb.org/t/p/w200/${url}`} alt="NONE" />
      </SliderContainer>
    </div>
  );
}
