import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./main/Main";
import Detail from "./detail/Detail";
import Nav from "./Nav/Nav";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />{" "}
      <Switch>
        <Route path="/">
          <Main />
        </Route>
        <Route path="/detail">
          <Detail />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
