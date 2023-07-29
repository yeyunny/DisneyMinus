import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Nav/Nav";
import GlobalStyle from "./styles/globalStyle";
import Main from "./main/Main";
import Detail from "./detail/Detail";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/movieId" element={<Detail />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
