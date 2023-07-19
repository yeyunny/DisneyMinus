import { AiFillHome, AiOutlinePlus, AiFillStar } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { PiFilmReelFill, PiTelevisionFill } from "react-icons/pi";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Img = styled.img`
  width: 30px;
  height: 30px;
  padding-top: 10px;
`;

const MenuItem = styled.p`
  display: inline-flex;
  align-items: center;
  margin-right: 10px;
  padding-left: 5px;
`;

function Nav() {
  return (
    <Container>
      <Img src="/img/Banana.jpg" alt="데이터를 불러오지 못했습니다"></Img>
      <MenuItem>
        <AiFillHome /> 홈
      </MenuItem>
      <MenuItem>
        <FiSearch />
        검색
      </MenuItem>
      <MenuItem>
        <AiOutlinePlus />
        관심 콘텐츠
      </MenuItem>
      <MenuItem>
        <AiFillStar />
        오리지널
      </MenuItem>
      <MenuItem>
        <PiFilmReelFill />
        영화
      </MenuItem>
      <MenuItem>
        <PiTelevisionFill />
        시리즈
      </MenuItem>
    </Container>
  );
}

export default Nav;
