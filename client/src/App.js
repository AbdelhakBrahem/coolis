import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Feed from "./pages/Feed";
import Navbar from "./pages/Navbar";
import PrivetRoute from "./PrivetRoute";


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <PrivetRoute exact path="/feed" component={Feed} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
