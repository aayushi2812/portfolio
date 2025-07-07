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
                  I am a passionate Full Stack Developer with a strong foundation in building dynamic, user-centric applications using modern technologies like React, Angular, Spring Boot, and Oracle.
                  <br /><br />
                  With over 4 years of hands-on experience in software development, I’ve had the opportunity to design, develop, and deploy scalable solutions - from robust banking systems, mobile applications to AI-powered tools. I thrive on turning complex problems into intuitive digital experiences, whether it’s crafting responsive UIs or architecting efficient backend APIs.
                  <br /><br />
                  I’ve worked with cross-functional teams, led projects from scratch, and collaborated closely with stakeholders to deliver impactful results. This portfolio showcases a collection of my work - real-world applications, side projects, and coding experiments that reflect my journey, skills, and passion for clean, maintainable code.
                  <br /><br />
                  Let’s build something amazing together.
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
