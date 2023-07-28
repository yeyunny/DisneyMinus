import styled from "styled-components";
import { MovieInfo } from "../main/Main";

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

function Image({ movie }: { movie: MovieInfo[] }) {
  return (
    <ContainerDiv>
      <ImgContainer>
        {movie.map((item) => {
          return (
            <Img
              src={`https://image.tmdb.org/t/p/w200/${item.backdrop_path}`}
              alt="NONE"
            />
          );
        })}
      </ImgContainer>
    </ContainerDiv>
  );
}

export default Image;
