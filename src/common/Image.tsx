import styled from "styled-components";
import { MovieInfo } from "../main/Main";
import { useNavigate } from "react-router-dom";

const ContainerDiv = styled.div``;

const ImgContainer = styled.div`
  display: flex;
  float: left;
`;

const Img = styled.img`
  border-radius: 10px;
  width: 200px;
  height: auto;
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
