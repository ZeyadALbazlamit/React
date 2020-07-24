import React from 'react';
import "./Footer.css";
export default function Footer()
{
    return (


        <footer class="m-t">
        <div class="footer-container ">
          <div class="left-col">
            <img src="logo.png" alt="" class="logo"/>
            <div class="social-media">
              <a href="#"><i class="fab fa-facebook-f w"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
              <a href="#"><i class="fab fa-instagram w"></i></a>
              <a href="#"><i class="fab fa-youtube"></i></a>
              <a href="#"><i class="fab fa-linkedin-in w"></i></a>
            </div>
            <p class="rights-text w" >© 2020 Created By Zeyad-ALbazlamit All Rights Reserved.</p>
          </div>
  
          <div class="right-col">
            <h1>Our Newsletter</h1>
            
            <p class="w">Enter Your Email to get our news and updates.</p>
            <form action="" class="newsletter-form">
              <input type="text" class="txtb" placeholder="Enter Your Email"/>
              <input type="submit" class="btn" value="submit" />
            </form>
          </div>
        </div>
      </footer>
      );
}
 

