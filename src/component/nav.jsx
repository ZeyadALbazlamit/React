import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import "./nav.css";
import {Context} from "./b";
 export default function Nav() {
const con= useContext(Context);
  function consol (){console.log(con.d)}

  return(

<nav class="navbar  navbar-expand-lg navbar-dark bg-primary ">

  <button onClick={consol}  class="navbar-toggler" type="button"  data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  

  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
    <li class="nav-item">
<Link class="nav-link " to="/c">Example</Link>
      </li> 
      
      <li class="nav-item">
      <Link class="nav-link" to="/">  Robots </Link>
      </li>
     
    </ul>
    <form class="form-inline my-2 my-lg-0">
   
<Link class="nav-link  cw" to="/">Count <span class="c"> {con.d}</span></Link>

      <input class="form-control mr-sm-2" 
      type="number"
       placeholder="Enter the number of robots"
        onChange={con.change}
 
     />
      
      </form>
  </div>
</nav>
);
}
