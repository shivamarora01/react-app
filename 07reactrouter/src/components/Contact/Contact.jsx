import React from 'react';
import './Contact.css'
import image4 from '../Contact/shoe4.jpg'
import image6 from '../Contact/shoe6.jpg'
function Contact() {
  return (
    <div id="main">
    <div id="back">
        <img src={image4} alt=""/>
        <img src={image6} alt=""/>
        <img src="IMG_7566.JPG" alt=""/>
        <img src="IMG_7567.JPG" alt=""/>
        <img src="IMG_7568.JPG" alt=""/>
    </div>
    <div id="top">
        <div id="workingarea">
            <div id="nav">
                <div id="nleft">
                    <img src="raybanlogo.png" alt=""/>
                    <a href="">Products</a>
                    <a href="">Store</a>
                </div>
                <div id="nright">
                    <a href="">LUXE</a>
                    <a href="">Cart</a>
                </div>
            </div>
            <div id="hero">
                <div id="heroleft">
                    <div id="elem">
                        <h1> Walk your </h1>
                        <h1>Shoes: silent </h1> 
                        <h1>DAVID VHANG</h1>
                        <h1>DAVID VHANG</h1>
                        <h1>DAVID VHANG</h1>
                    </div>
                    <div id="elem">
                        <h1>path, step</h1>
                        <h1>narrators of </h1> 
                        <h1>DAVID VHANG</h1>
                        <h1>DAVID VHANG</h1>
                        <h1>DAVID VHANG</h1>
                    </div>
                    <div id="elem">
                        <h1>boldly.</h1>
                        <h1>adventures.</h1> 
                        <h1>DAVID VHANG</h1>
                        <h1>DAVID VHANG</h1>
                        <h1>DAVID VHANG</h1>
                    </div>
                    <button>Explore Now</button>
                </div>
                <div id="heroright">
                </div>
            </div>
        </div>
    </div>
    </div>
  )};

export default Contact;
