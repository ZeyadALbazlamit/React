import React from 'react';
import "./a.css";

function A(props){
    return (
      
<div class="card cl">
      <div class="front cl">
        <img src={props.picture} alt="" />
      </div>
      <div class="back cl">
        <div class="back-content middle cl">
          <h2></h2>
          <span class="cl">Name of the robote:</span>
    < div class="cl">{props.name}</div>
          <div class="sm">
            <a href="#"><i class="fab fa-facebook-f face"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-youtube re"></i></a>
            <a href="#"><i class="fab fa-instagram insta"></i></a>
          </div>
    <div class="insta"><strong>{props.price} $</strong></div>
        </div>
      </div>
    </div>
      );
}
 

export default A;