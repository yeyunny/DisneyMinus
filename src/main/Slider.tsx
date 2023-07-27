import { styled } from "styled-components";

const SliderContainer = styled.div`
  background-color: black;
  float: left;
`;

const Img = styled.img`
  border-radius: 10px;
  margin: 5px;
`;

export default function Slider({ url }: { url: string }) {
  return (
    <div>
      <SliderContainer>
        <Img src={`https://image.tmdb.org/t/p/w200/${url}`} alt="NONE" />
      </SliderContainer>
    </div>
  );
}
