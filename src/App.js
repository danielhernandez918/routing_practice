import React from "react";
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Entry from './components/Entry'


const Home = (props) => {
  return (
    <h1 className="App">Welcome</h1>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route  path="/home">
          <Home />
        </Route>
        <Route path="/:entry/:textColor?/:backgroundColor?">
          <Entry/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
    
export default App;