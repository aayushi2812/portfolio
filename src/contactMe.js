import { Card, CardContent } from "@mui/material";
import './contactMe.css';
import { Button } from "bootstrap";
import { useState } from "react";
function ContactMe({toggleDarkMode, primary, secondary, tertiary, quaternary}) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleMouseAction = (event) => {
    if(toggleDarkMode){
      event.target.style.backgroundColor=quaternary; 
      event.target.style.color=primary;
    }
    else{
      event.target.style.backgroundColor=primary; 
      event.target.style.color=quaternary;
    }
  }

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="contactMe" className="contactMeCard">
      <Card className="contactMe-card-intro" style={toggleDarkMode ? { backgroundColor: primary } : { backgroundColor: primary }}>
        <h1 style={toggleDarkMode ? { color: quaternary } : { color: quaternary }}>Contact Me</h1>
        <div className="line4" style={toggleDarkMode ? {borderTop: `3px solid ${quaternary}`} : {borderTop: `3px solid ${quaternary}`}}></div>
        <CardContent className="content">
          <div className="question"><h5>Have a question or want to work together?</h5></div>
          <a className="a-tag" onMouseEnter={(e) => {e.target.style.color=secondary}} onMouseLeave={(e) => {e.target.style.color=quaternary}} style={{color: quaternary}} href="https://www.linkedin.com/in/aayushi-parekh-08426a181/"><i class="bi bi-linkedin"></i></a>
          <a className="a-tag" onMouseEnter={(e) => {e.target.style.color=secondary}} onMouseLeave={(e) => {e.target.style.color=quaternary}} style={{color: quaternary}} href="https://github.com/aayushi2812"><i class="bi bi-github"></i></a>
          <a className="a-tag" onMouseEnter={(e) => {e.target.style.color=secondary}} onMouseLeave={(e) => {e.target.style.color=quaternary}} style={{color: quaternary}} href="mailto:aayushiparekh2812@gmail.com"><i class="bi bi-envelope"></i></a>
          <div className="backontop" onClick={() => scrollToSection("home")}>
            <button class="button buttontotop" 
            style={toggleDarkMode ? { backgroundColor: quaternary, color:primary } : { backgroundColor: primary, color: quaternary }} 
            onMouseEnter={handleMouseAction} 
            onMouseLeave={handleMouseAction}>
              <svg class="svgIcon" viewBox="0 0 384 512">
                <path
                  d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                ></path>
              </svg>
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
export default ContactMe