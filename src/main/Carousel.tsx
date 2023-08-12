import { styled } from "styled-components";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import CarouselItem from "./CarouselItem";

const SliderContainer = styled.div`
  background-color: black;
  float: left;
  width: 350px;
  height: auto;
`;

const LeftBtn = styled.span`
  /* transform: translate(0, -50%); */
`;

const RigthBtn = styled.span``;

export default function Carousel({ url }: { url: string }) {
  return (
    <div>
      <SliderContainer>
        <LeftBtn>
          <BiChevronLeft color="white" />
        </LeftBtn>
        <CarouselItem url={url} />
        <RigthBtn>
          <BiChevronRight color="white" />
        </RigthBtn>
      </SliderContainer>
    </div>
  );
}
