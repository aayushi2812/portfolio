 import "./skills.css";

function Skills({toggleDarkMode, primary, secondary, tertiary, quaternary}) {

  return (
    <div id="skills" className="container-fluid skills" style={toggleDarkMode ? { backgroundColor: secondary } : { backgroundColor: primary }}>
      <h1 style={toggleDarkMode ? { color: quaternary } : { color: quaternary }}>Skills</h1>
      <div className="line1" style={toggleDarkMode ? {borderTop: `3px solid ${quaternary}`} : {borderTop: `3px solid ${quaternary}`}}></div>
      <div className="row skills-data">
        <div className="col-xs-5-cols"><button type="button" class="btn btn-lg box" style={toggleDarkMode ? { backgroundColor: quaternary, color: secondary } : { backgroundColor: primary, color: quaternary, borderColor: quaternary }}>
          <div class="top">
            HTML
          </div>
          <img src='/html.png' alt='html' className="image-skills" />
        </button>
        </div>
        <div className="col-xs-5-cols"><button type="button" class="btn btn-lg box" style={toggleDarkMode ? { backgroundColor: quaternary, color: secondary } : { backgroundColor: primary, color: quaternary, borderColor: quaternary }}>
          <div class="top">
            CSS
          </div>
          <img src='/css.png' alt='css' className="image-skills" />
        </button>
        </div>
        <div className="col-xs-5-cols"><button type="button" class="btn btn-lg box" style={toggleDarkMode ? { backgroundColor: quaternary, color: secondary } : { backgroundColor: primary, color: quaternary, borderColor: quaternary }}>
          <div class="top">
            Tailwind CSS
          </div>
          <img src='/tailwind.png' alt='mysql' className="image-skills" />
        </button>
        </div>
        <div className="col-xs-5-cols"><button type="button" class="btn btn-lg box" style={toggleDarkMode ? { backgroundColor: quaternary, color: secondary } : { backgroundColor: primary, color: quaternary, borderColor: quaternary }}>
          <div class="top">
            JavaScript
          </div>
          <img src='/javascript.png' alt='javascript' className="image-skills" />
        </button>
        </div>
        <div className="col-xs-5-cols"><button type="button" class="btn btn-lg box" style={toggleDarkMode ? { backgroundColor: quaternary, color: secondary } : { backgroundColor: primary, color: quaternary, borderColor: quaternary }}>
          <div class="top">
            Angular
          </div>
          <img src='/angular.png' alt='angular' className="image-skills" />
        </button>
        </div>
        <div className="col-xs-5-cols"><button type="button" class="btn btn-lg box" style={toggleDarkMode ? { backgroundColor: quaternary, color: secondary } : { backgroundColor: primary, color: quaternary, borderColor: quaternary }}>
          <div class="top">
            React
          </div>
          <img src='/react.png' alt='react' className="image-skills" />
        </button>
        </div>
        <div className="col-xs-5-cols"><button type="button" class="btn btn-lg box" style={toggleDarkMode ? { backgroundColor: quaternary, color: secondary } : { backgroundColor: primary, color: quaternary, borderColor: quaternary }}>
          <div class="top">
            Node
          </div>
          <img src='/nodejs.png' alt='node' className="image-skills" />
        </button>
        </div>
        <div className="col-xs-5-cols"><button type="button" class="btn btn-lg box" style={toggleDarkMode ? { backgroundColor: quaternary, color: secondary } : { backgroundColor: primary, color: quaternary, borderColor: quaternary }}>
          <div class="top">
            Java
          </div>
          <img src='/java.png' alt='java' className="image-skills" />
        </button>
        </div>
        <div className="col-xs-5-cols"><button type="button" class="btn btn-lg box" style={toggleDarkMode ? { backgroundColor: quaternary, color: secondary } : { backgroundColor: primary, color: quaternary, borderColor: quaternary }}>
          <div class="top">
            Spring
          </div>
          <img src='/spring.png' alt='spring' className="image-skills" />
        </button>
        </div>
        <div className="col-xs-5-cols"><button type="button" class="btn btn-lg box" style={toggleDarkMode ? { backgroundColor: quaternary, color: secondary } : { backgroundColor: primary, color: quaternary, borderColor: quaternary }}>
          <div class="top">
            Python
          </div>
          <img src='/Python1.png' alt='python' className="image-skills" />
        </button>
        </div>
        <div className="col-xs-5-cols"><button type="button" class="btn btn-lg box" style={toggleDarkMode ? { backgroundColor: quaternary, color: secondary } : { backgroundColor: primary, color: quaternary, borderColor: quaternary }}>
          <div class="top">
            Oracle
          </div>
          <img src='/oracle.jpg' alt='mysql' className="image-skills" />
        </button>
        </div>
        <div className="col-xs-5-cols"><button type="button" class="btn btn-lg box" style={toggleDarkMode ? { backgroundColor: quaternary, color: secondary } : { backgroundColor: primary, color: quaternary, borderColor: quaternary }}>
          <div class="top">
            Mongo
          </div>
          <img src='/mongo.jpg' alt='mysql' className="image-skills" />
        </button>
        </div>
      </div>
    </div>
  );
}

export default Skills;
