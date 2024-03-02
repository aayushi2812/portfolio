import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import "./skills.css";

function skills() {
  return (
    <div className="container-fluid skills">
      <h1>Skills</h1>
      <div className="row">
        <div className="col-md-5-cols"><button type="button" class="btn btn-lg">
          <img src='/html1.png' alt='html' className="image-skills" />
          <div class="middle progress">
            <div class="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </button>
        </div>
        <div className="col-md-5-cols"><button type="button" class="btn btn-lg">
          <img src='/css.png' alt='css' className="image-skills" />
          <div class="middle progress">
            <div class="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </button>
        </div>
        <div className="col-md-5-cols"><button type="button" class="btn btn-lg">
          <img src='/javascript.png' alt='javascript' className="image-skills" />
          <div class="middle progress">
            <div class="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </button>
        </div>
        <div className="col-md-5-cols"><button type="button" class="btn btn-lg">
          <img src='/angular.png' alt='angular' className="image-skills" />
          <div class="middle progress">
            <div class="progress-bar" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </button>
        </div>
        <div className="col-md-5-cols"><button type="button" class="btn btn-lg">
          <img src='/react.png' alt='react' className="image-skills" />
          <div class="middle progress">
            <div class="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5-cols"><button type="button" class="btn btn-lg">
          <img src='/nodejs.png' alt='node' className="image-skills" />
          <div class="middle progress">
            <div class="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </button>
        </div>
        <div className="col-md-5-cols"><button type="button" class="btn btn-lg">
          <img src='/java.png' alt='java' className="image-skills" />
          <div class="middle progress">
            <div class="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </button>
        </div>
        <div className="col-md-5-cols"><button type="button" class="btn btn-lg">
          <img src='/spring.png' alt='spring' className="image-skills" />
          <div class="middle progress">
            <div class="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </button>
        </div>
        <div className="col-md-5-cols"><button type="button" class="btn btn-lg">
          <img src='/Python1.png' alt='python' className="image-skills" />
          <div class="middle progress">
            <div class="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </button>
        </div>
        <div className="col-md-5-cols"><button type="button" class="btn btn-lg">
          <img src='/mysql.png' alt='mysql' className="image-skills" />
          <div class="middle progress">
            <div class="progress-bar" role="progressbar" style={{ width: '70%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </button>
        </div>
      </div>
    </div>
  );
}

export default skills;
