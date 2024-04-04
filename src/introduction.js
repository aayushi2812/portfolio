import { Card, CardContent } from "@mui/material";
import "./introduction.css";
import { useEffect } from "react";

function introduction({toggleDarkMode, primary, secondary, tertiary, quaternary}) {
  // const observer = new IntersectionObserver(intersections => {
  //   intersections.forEach(({
  //     target,
  //     isIntersecting
  //   }) => {
  //     target.classList.toggle('animate', isIntersecting);
  //   });
  // }, {
  //   threshold: 0
  // });
  
  // document.querySelectorAll('.introduction').forEach(div => {
  //   observer.observe(div);
  // });

  // const animation_elements = document.querySelectorAll('.animate-on-scroll');
  // const observer = new IntersectionObserver((enteries) => {
  //   enteries.forEach((entry) => {
  //     if(entry.isIntersecting){
  //       entry.target.classList.add('animate-on-scroll');
  //     }
  //     else{
  //       entry.target.classList.remove('animate-on-scroll');
  //     }
  //   })
  // },{
  //   threshold: 0.5
  // })

  // for (let i = 0; i < animation_elements.length; i++) {
  //   const el = animation_elements[i];
  //   observer.observe(el);
  // }
  // const animated = document.querySelector('.animated');
  // const ob = new IntersectionObserver(
  //   (entries) => {
  //     entries.forEach((entry) => {
  //       entry.target.classList.toggle("show", entry.isIntersecting);
  //       if (entry.isIntersecting) ob.unobserve(entry.target);
  //     });
  //   },
  //   { 
  //     threshold: 1
  //   }
  // );
  // ob.observe(animated);
    

  return (
    <div className="introduction animate-on-scroll" id="introduction">
      <Card className="card-intro" style={toggleDarkMode ? { backgroundColor: secondary } : { backgroundColor: "white"  }}>
        <CardContent className="animate-on-scroll">
        <h1 style={toggleDarkMode ? { color: quaternary } : { color: secondary }}>Introduction</h1>
        <div className="line" style={toggleDarkMode ? {borderTop: `3px solid ${quaternary}`} : {borderTop: `3px solid ${secondary}`}}></div>
          <div className="container-fluid intro-data">
            <div className="row">
              <div class="col-md-6">
                <img src='/profile.jpg' className="imgStyle" alt='profile' height={300} width={300} />
              </div>
              <div class="col-md-6 intro-text animate-on-scroll">
                <p style={toggleDarkMode ? { color: quaternary } : { color: secondary }}>
                  A dedicated Software Developer with more than three years of
                  experience specializing in the development of robust banking
                  applications and systems with expertise in both front-end and
                  back-end technologies passionate about leveraging technical
                  expertise to contribute to innovative projects eager to join a
                  forward-thinking company to further enhance skills and deliver
                  top-tier solutions
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
