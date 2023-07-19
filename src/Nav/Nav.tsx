import { AiFillHome, AiOutlinePlus, AiFillStar } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { PiFilmReelFill, PiTelevisionFill } from "react-icons/pi";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
`;

function Nav() {
  return (
    <div>
      <Img src="/img/Banana.jpg" alt="데이터를 불러오지 못했습니다"></Img>
      <p>
        <AiFillHome /> 홈
      </p>
      <p>
        <FiSearch />
        검색
      </p>
      <p>
        <AiOutlinePlus />
        관심 콘텐츠
      </p>
      <p>
        <AiFillStar />
        오리지널
      </p>
      <p>
        <PiFilmReelFill />
        영화
      </p>
      <p>
        <PiTelevisionFill />
        시리즈
      </p>
    </div>
  );
}

export default Nav;
