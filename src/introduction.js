import { Card, CardContent } from "@mui/material";
import "./introduction.css";
import { useEffect } from "react";

function introduction({toggleDarkMode, primary, secondary, tertiary, quaternary}) {

  return (
    <div className="introduction animate-on-scroll" id="introduction">
      <Card className="card-intro" style={toggleDarkMode ? { backgroundColor: secondary } : { backgroundColor: primary }}>
        <CardContent className="animate-on-scroll">
        <h1 style={toggleDarkMode ? { color: quaternary } : { color: quaternary }}>Introduction</h1>
        <div className="line" style={toggleDarkMode ? {borderTop: `3px solid ${quaternary}`} : {borderTop: `3px solid ${quaternary}`}}></div>
          <div className="container-fluid intro-data">
            <div className="row">
              <div class="col-md-6">
                <img src='/profile.jpg' className="imgStyle" alt='profile' />
              </div>
              <div class="col-md-6 intro-text animate-on-scroll">
                <p style={toggleDarkMode ? { color: quaternary } : { color: quaternary }}>
                  I am a passionate Software Developer with 3+ years of experience in tech industry. My educational background is Bachelor’s Degree in Computer Engineering. 
                  My expertise spans Angular, Java, Spring Boot and Oracle.  I am most proud of creating user-friendly applications, implementing efficient backend solutions, and ensuring smooth data flow between systems.
                  <br /><br/>
                  I am looking forward to exploring opportunities in Full Stack Development so that I can leverage my skills to build robust and scalable web applications 
                  and services and contribute to innovative projects that enhance user experiences.
                  <br/><br/>
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
