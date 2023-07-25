import styled from "styled-components";
import LoginModal from "./LoginModal";
import { AiFillHome, AiOutlinePlus, AiFillStar } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { PiFilmReelFill, PiTelevisionFill } from "react-icons/pi";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  justify-content: space-between;
  background-color: pink;
`;

const MenuContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Img = styled.img`
  width: 60px;
  height: 60px;
`;

const MenuItem = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogInContainer = styled.div`
  background-color: green;
`;

const LogIn = styled.p`
  display: flex;
  justify-content: end;
  align-items: center;
  height: 100%;
  padding-right: 10px;
`;

function Nav() {
  const [isClicked, setIsClicked] = useState(false);

  const loginHandler = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <Container>
      <MenuContainer>
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
      </MenuContainer>
      <LogInContainer>
        <LogIn onClick={loginHandler}>로그인</LogIn>
        {isClicked === true && <LoginModal />}
      </LogInContainer>
    </Container>
  );
}

export default Nav;
