import logo from './logo.svg';
import './App.css';
import Home from './Components/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
       <Switch>
          <Route path="/" exact>
              <Home />
          </Route>
       </Switch>
    </Router>
);
}

export default App;
