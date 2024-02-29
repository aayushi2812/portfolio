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
    <div className="skills">
      <h1>Skills</h1>
      <div>
        <button type="button" class="btn btn-lg">
          <img src='/html.png' alt='html' height={120} width={120}/>
        </button>
        <button type="button" class="btn btn-lg">
          <img src='/css.png' alt='css' height={120} width={120}/>
        </button>
        <button type="button" class="btn btn-lg">
          <img src='/javascript.png' alt='javascript' height={120} width={120}/>
        </button>
        <button type="button" class="btn btn-lg">
          <img src='/angular.png' alt='angular' height={120} width={120}/>
        </button>
        <button type="button" class="btn btn-lg">
          <img src='/react.png' alt='react' height={120} width={120}/>
        </button>
        <br />
        <button type="button" class="btn btn-lg">
          <img src='/node.png' alt='node' height={120} width={120}/>
        </button>
        <button type="button" class="btn btn-lg">
          <img src='/java.png' alt='java' height={120} width={120}/>
        </button>
        <button type="button" class="btn btn-lg">
          <img src='/spring.png' alt='spring' height={120} width={120}/>
        </button>
        <button type="button" class="btn btn-lg">
          <img src='/Python1.png' alt='python' height={120} width={120}/>
        </button>
        <button type="button" class="btn btn-lg">
          <img src='/mysql.png' alt='mysql' height={120} width={120}/>
        </button>
        
      </div>
    </div>
  );
}

export default skills;
