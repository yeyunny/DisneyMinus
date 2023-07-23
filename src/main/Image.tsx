import styled from "styled-components";

const ContainerDiv = styled.div``;

// const MovieImg = styled.img``;

// const MovieInfo = styled.p``;

// export interface Props {
//   url: string;
// }

function Image({ url }: { url: string }) {
  return (
    <ContainerDiv>
      <img src={`https://image.tmdb.org/t/p/w200/${url}`} alt="NONE" />
    </ContainerDiv>
  );
}

export default Image;
