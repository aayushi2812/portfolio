import { useEffect, useState } from "react";
import "./skills.css";
import { useRef } from "react";
import { useIntersection } from "react-use";

function Skills({toggleDarkMode, primary, secondary, tertiary, quaternary}) {

  return (
    <div id="skills" className="container-fluid skills" style={toggleDarkMode ? { backgroundColor: secondary } : { backgroundColor: "white" }}>
      <h1 style={toggleDarkMode ? { color: quaternary } : { color: secondary }}>Skills</h1>
      <div className="line1" style={toggleDarkMode ? {borderTop: `3px solid ${quaternary}`} : {borderTop: `3px solid ${secondary}`}}></div>
      <div className="row skills-data">
        <div className="col-xs-5-cols"><button type="button" class="btn btn-lg box" style={toggleDarkMode ? { backgroundColor: quaternary, color: secondary } : { backgroundColor: primary, color: quaternary }}>
          <div class="top">
            HTML
          </div>
          <img src='/html1.png' alt='html' className="image-skills" />
          {/* <div class="bottom progress blue">
            <div class="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
          </div> */}
        </button>
        </div>
        <div className="col-xs-5-cols"><button type="button" class="btn btn-lg box" style={toggleDarkMode ? { backgroundColor: quaternary, color: secondary } : { backgroundColor: primary, color: quaternary }}>
          <div class="top">
            CSS
          </div>
          <img src='/css.png' alt='css' className="image-skills" />
          {/* <div class="bottom progress blue">
            <div class="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
          </div> */}
        </button>
        </div>
        <div className="col-xs-5-cols"><button type="button" class="btn btn-lg box" style={toggleDarkMode ? { backgroundColor: quaternary, color: secondary } : { backgroundColor: primary, color: quaternary }}>
          <div class="top">
            JavaScript
          </div>
          <img src='/javascript.png' alt='javascript' className="image-skills" />
          {/* <div class="bottom progress blue">
            <div class="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
          </div> */}
        </button>
        </div>
        <div className="col-xs-5-cols"><button type="button" class="btn btn-lg box" style={toggleDarkMode ? { backgroundColor: quaternary, color: secondary } : { backgroundColor: primary, color: quaternary }}>
          <div class="top">
            Angular
          </div>
          <img src='/angular.png' alt='angular' className="image-skills" />
          {/* <div class="bottom progress blue">
            <div class="progress-bar" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
          </div> */}
        </button>
        </div>
        <div className="col-xs-5-cols"><button type="button" class="btn btn-lg box" style={toggleDarkMode ? { backgroundColor: quaternary, color: secondary } : { backgroundColor: primary, color: quaternary }}>
          <div class="top">
            React
          </div>
          <img src='/react.png' alt='react' className="image-skills" />
          {/* <div class="bottom progress blue">
            <div class="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
          </div> */}
        </button>
        </div>
        <div className="col-xs-5-cols"><button type="button" class="btn btn-lg box" style={toggleDarkMode ? { backgroundColor: quaternary, color: secondary } : { backgroundColor: primary, color: quaternary }}>
          <div class="top">
            Nodejs
          </div>
          <img src='/nodejs.png' alt='node' className="image-skills" />
          {/* <div class="bottom progress blue">
            <div class="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
          </div> */}
        </button>
        </div>
        <div className="col-xs-5-cols"><button type="button" class="btn btn-lg box" style={toggleDarkMode ? { backgroundColor: quaternary, color: secondary } : { backgroundColor: primary, color: quaternary }}>
          <div class="top">
            Java
          </div>
          <img src='/java.png' alt='java' className="image-skills" />
          {/* <div class="bottom progress blue">
            <div class="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
          </div> */}
        </button>
        </div>
        <div className="col-xs-5-cols"><button type="button" class="btn btn-lg box" style={toggleDarkMode ? { backgroundColor: quaternary, color: secondary } : { backgroundColor: primary, color: quaternary }}>
          <div class="top">
            Spring
          </div>
          <img src='/spring.png' alt='spring' className="image-skills" />
          {/* <div class="bottom progress blue">
            <div class="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
          </div> */}
        </button>
        </div>
        <div className="col-xs-5-cols"><button type="button" class="btn btn-lg box" style={toggleDarkMode ? { backgroundColor: quaternary, color: secondary } : { backgroundColor: primary, color: quaternary }}>
          <div class="top">
            Python
          </div>
          <img src='/Python1.png' alt='python' className="image-skills" />
          {/* <div class="bottom progress blue">
            <div class="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
          </div> */}
        </button>
        </div>
        <div className="col-xs-5-cols"><button type="button" class="btn btn-lg box" style={toggleDarkMode ? { backgroundColor: quaternary, color: secondary } : { backgroundColor: primary, color: quaternary }}>
          <div class="top">
            MySQL
          </div>
          <img src='/mysql.png' alt='mysql' className="image-skills" />
          {/* <div class="bottom progress yellow">
            <div class="progress-bar" role="progressbar" style={{ width: '70%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%</div>
          </div> */}
        </button>
        </div>
      </div>
    </div>
  );
}

export default Skills;
