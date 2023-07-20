import styled from "styled-components";
import LoginModal from "../modal/LoginModal";
import { AiFillHome, AiOutlinePlus, AiFillStar } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { PiFilmReelFill, PiTelevisionFill } from "react-icons/pi";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  background-color: pink;
`;

const Img = styled.img`
  width: 30px;
  height: 30px;
  padding-top: 15px;
  padding-left: 15px;
`;

const MenuItem = styled.p`
  display: flex;
  align-items: center;
  margin-right: 10px;
  padding-left: 10px;
`;

const LogInOut = styled.p`
  display: flex;
  align-items: center;
`;

function Nav() {
  const [isClicked, setIsClicked] = useState(false);

  const loginHandler = () => {
    setIsClicked((prev) => !prev);
  };

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
      <LogInOut onClick={loginHandler}>로그인</LogInOut>
      {isClicked === true && <LoginModal />}
    </Container>
  );
}

export default Nav;
