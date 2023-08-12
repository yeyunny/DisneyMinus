import styled from "styled-components";
import { MovieInfo } from "../main/Main";
import { useNavigate } from "react-router-dom";

const ContainerDiv = styled.div``;

const ImgContainer = styled.div`
  display: flex;
  padding: 20px;
  width: 100%;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Img = styled.img`
  border-radius: 10px;
  display: flex;
  margin: 5px;
`;

function Image({ movie, genreId }: { movie: MovieInfo[]; genreId: number }) {
  const navigate = useNavigate();

  return (
    <ContainerDiv>
      <ImgContainer>
        {movie.map((item) => {
          return (
            <Img
              onClick={() => {
                navigate(`/detail/${item.id}`, { state: genreId });
              }}
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
