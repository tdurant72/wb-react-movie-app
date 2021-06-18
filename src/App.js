import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";
// Styles
import { GlobalStyle } from "./GlobalStyle";
//components
import Header from "./components/Header";
import Home from "./components/Home";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";

const App = () => {
  let match = useRouteMatch();
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path={`${match.path}/:movieId`}>
          <Movie />
        </Route>
        <Route path="/*">
          <NotFound />
        </Route>
      </Switch>

      <GlobalStyle />
    </Router>
  );
};

export default App;
