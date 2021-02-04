import "./App.css";
import Navbar from "./layout/Navbar";
import Inscription from './views/Inscription'
import Profile from './views/List'
import Login from './views/Login'
import { BrowserRouter as Router, Switch, Route,} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Switch>
            <Route exact path="/" />
            <Route path="/Connexion" component={Login} />
            <Route path="/inscription" component={Inscription} />
            <Route path="/Profile" component={Profile} />
          </Switch>
    </Router>
  );
}

export default App;
