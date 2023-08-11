import { styled } from "styled-components";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const SliderContainer = styled.div`
  background-color: black;
  float: left;
`;

const LeftBtn = styled.span`
  transform: translate(0, -50%);
`;

const RigthBtn = styled.span``;

const Img = styled.img`
  border-radius: 10px;
  margin: 5px;
`;

export default function Slider({ url }: { url: string }) {
  return (
    <div>
      <SliderContainer>
        <LeftBtn>
          <BiChevronLeft color="white" />
        </LeftBtn>
        <Img src={`https://image.tmdb.org/t/p/w200/${url}`} alt="NONE" />
        <RigthBtn></RigthBtn>
        <BiChevronRight color="white" />
      </SliderContainer>
    </div>
  );
}
