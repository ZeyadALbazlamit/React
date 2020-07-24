import React from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import './App.css';
import Nav from "./component/nav";
import Pic from "./component/pic";
//import B from "./component/b";
import Chart from "./component/c";
import Footer from "./component/Footer";
import {Con} from "./component/b";
function App() {
  
  return (

    
 
    <Router>
    <div className="App">
  <Con>
    <Nav />
  
 
      <Switch>
      <Route exact path='/' component={Pic} />
      <Route  path='/b' component={Con} />
      <Route  path='/c' component={Chart} />
     
      </Switch>
  
      <Footer /> 
      </Con>
    </div>
    </Router>
  
  );
}

export default App;
