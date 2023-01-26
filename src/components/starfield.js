import React from "react"; 
import {ReactP5Wrapper} from "react-p5-wrapper"; 

var stars = [];

let speed; 

const Sketch = p5 => {
    p5.setup = () => {
        p5.createCanvas(window.innerWidth, window.innerHeight);
        for (var i = 0; i < 800; i ++) {
            stars[i] = new beam(); 
        }
    }

    p5.draw = () => {
        speed =  map(200, 0, width, 0, 50); 
        background(0); 
        translate(width / 2, height / 2); 
        for (var i = 0; i < stars.length; i++) {
            stars[i].update();
            stars[i].show(); 
        }
    }
}