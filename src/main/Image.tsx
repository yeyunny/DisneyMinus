import styled from "styled-components";

const ContainerDiv = styled.div``;

function Image({ url }: { url: string }) {
  return (
    <ContainerDiv>
      <img src={`https://image.tmdb.org/t/p/w200/${url}`} alt="NONE" />
    </ContainerDiv>
  );
}

export default Image;
