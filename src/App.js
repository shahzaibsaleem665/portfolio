import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Main from "./pages/Main";


function App() {
  return (
    // define the path using router path='/' for home page
    <Router>
    <div className="app">
      <Switch>
        <Route path='/'>
        <Main  />
        </Route>
      </Switch>
     
    </div>
    </Router>
  );
}

export default App;
