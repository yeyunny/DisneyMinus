import styled from "styled-components";

const ContainerDiv = styled.div``;

const ImgContainer = styled.img``;

function Image({ url }: { url: string }) {
  return (
    <ContainerDiv>
      <ImgContainer src={`https://image.tmdb.org/t/p/w200/${url}`} alt="NONE" />
    </ContainerDiv>
  );
}

export default Image;
