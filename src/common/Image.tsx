import styled from "styled-components";

const ContainerDiv = styled.div``;

const ImgContainer = styled.div`
  display: flex;
  float: left;
  background-color: yellow;
`;

const Img = styled.img`
  border-radius: 10px;
  width: 200px;
  height: auto;
  display: flex;
  margin: 5px;
`;

function Image({ url, genreId }: { url: string; genreId: number }) {
  return (
    <ContainerDiv>
      <ImgContainer>
        <Img src={`https://image.tmdb.org/t/p/w200/${url}`} alt="NONE" />
      </ImgContainer>
    </ContainerDiv>
  );
}

export default Image;
