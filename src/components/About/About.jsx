import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="about">
        <h1>About Rebecca</h1>
        <p><img src="/my-dev-blog/img/rebecca-web.jpg" alt="Rebecca in a blue t-shirt"></img>I'm a web developer based in Springfield, IL (STL native) specializing in HTML, CSS, JavaScript, jQuery, building themes on the .Net framework, and taking on new challenges.</p>
        <p>I have a background in design and art. I graduated with an MFA from Ohio University in 2005. I started transitioning from working in the art world to working as a web developer in 2011.</p>
        <p>Outside of being a web developer, I like to make art (drawing mostly), read (nonfiction, comics, graphic novels), watch YouTube videos, listen to podcasts, hike, play Pokemon Go, ride my bike, build with LEGO, go on roadtrips and travel, shop at thrift and antique stores, take photos of architecture, roadside attractions, old signs, americana. I like playing with my super awesome/vicious tuxedo cat named Map. I also love steak, Mexican food and pizza. My favorite dessert is frozen custard from Bobby's in Maryville, IL. I also like listening to music - mostly indie, alternative, new wave and punk from the 1980s and 1990s.
        </p>
        <p>I have a long-term partner named Ben. He's my rock and is overall the best person in the whole world.</p>
        <p>Visit <a href="https://www.rebeccaeilering.me">my website</a> to learn even more about me!
        </p>



      </div>
    );
  }
}

export default About;
