import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";

import Feeling from "../Feeling/Feeling";
import Understanding from "../Understanding/Understanding";
import Support from "../Support/Support";
import Comments from "../Comments/Comments";
import Review from "../Review/Review";
import SubmitSuccess from "../SubmitSuccess/SubmitSuccess";
import { Link } from "react-router-dom";
import Admin from "../Admin/Admin";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          {/* <Link to={"/admin"}> */}
          <h4>Don't forget it!</h4>
          {/* </Link> */}
        </header>
      </div>
      {/* abstract this even more with an array of survey inputs
      i.e. const list = [
        {
      SCREAMER: "SET_UNDERSTANDING",
      nextUrl: "/support",
      label: "Understanding",
      Question: "How well are you understanding the content?"
        },
        ...
      ]

      */}
      <Route exact path="/">
        <Feeling />
      </Route>

      <Route exact path="/understanding">
        <Understanding />
      </Route>

      <Route exact path="/support">
        <Support />
      </Route>

      <Route exact path="/comments">
        <Comments />
      </Route>

      <Route exact path="/review">
        <Review />
      </Route>

      <Route exact path="/submit-success">
        <SubmitSuccess />
      </Route>

      <Route exact path="/admin">
        <Admin />
      </Route>
    </Router>
  );
}

export default App;
