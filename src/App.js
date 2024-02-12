import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import './App.css';
import Home from './pages/Home';


function App() {
  return (
    // define the path using router path='/' for home page
    <Router>
    <div className="app">
      <Switch>
        <Route path='/'>
        <Home id='Home' />
        </Route>
      </Switch>
     
    </div>
    </Router>
  );
}

export default App;
