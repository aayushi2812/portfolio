import { Card, CardContent } from "@mui/material";
import "./introduction.css";
import { useEffect } from "react";

function introduction({toggleDarkMode, primary, secondary, tertiary, quaternary}) {

  return (
    <div className="introduction animate-on-scroll" id="introduction">
      <Card className="card-intro" style={toggleDarkMode ? { backgroundColor: secondary } : { backgroundColor: "white"  }}>
        <CardContent className="animate-on-scroll">
        <h1 style={toggleDarkMode ? { color: quaternary } : { color: secondary }}>Introduction</h1>
        <div className="line" style={toggleDarkMode ? {borderTop: `3px solid ${quaternary}`} : {borderTop: `3px solid ${secondary}`}}></div>
          <div className="container-fluid intro-data">
            <div className="row">
              <div class="col-md-6">
                <img src='/profile.jpg' className="imgStyle" alt='profile' />
              </div>
              <div class="col-md-6 intro-text animate-on-scroll">
                <p style={toggleDarkMode ? { color: quaternary } : { color: secondary }}>
                  {/* A dedicated Software Developer with more than three years of
                  experience specializing in the development of robust banking
                  applications and systems with expertise in both front-end and
                  back-end technologies passionate about leveraging technical
                  expertise to contribute to innovative projects eager to join a
                  forward-thinking company to further enhance skills and deliver
                  top-tier solutions. */}
                  <span className="there">Hi there!</span>
                  I’m Aayushi Parekh, a passionate Software Developer with a strong background in web development. My expertise spans Angular, Java, Spring Boot and Oracle. 
                  I thrive on solving complex problems and continuously learning new technologies to stay at the forefront of the industry.
                  <br /><br />
                  With a commitment to excellence and a collaborative approach, I bring a unique blend of technical skills and creativity to every project. 
                  Explore my portfolio to discover my skills and professional journey, and let's connect to discuss potential opportunities!
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default introduction;
