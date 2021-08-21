import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "./Containers/MainPage/MainPage";
import MoviePage from "./Containers/MoviePage/MoviePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={MainPage} />
        <Route path="/:imdbID" component={MoviePage} />
      </Router>
    </div>
  );
}

export default App;
