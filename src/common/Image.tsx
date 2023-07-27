import styled from "styled-components";

const ContainerDiv = styled.div`
  background-color: black;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  border-radius: 10px;
  width: 200px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Image({ title, url }: { title: string; url: string }) {
  return (
    <ContainerDiv>
      <ImgContainer>
        {/* <Img src={`https://image.tmdb.org/t/p/w200/${url}`} alt="NONE" /> */}
      </ImgContainer>
    </ContainerDiv>
  );
}

export default Image;
