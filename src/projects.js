import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import "./projects.css";

function Projects({ toggleDarkMode, primary, secondary, tertiary, quaternary }) {
  return (
    <div id="projects" className="projects" style={toggleDarkMode ? { backgroundColor: secondary } : { backgroundColor: "white" }}>
      <h1 style={toggleDarkMode ? { color: quaternary } : { color: secondary }}>Projects</h1>
      <div className="line2" style={toggleDarkMode ? { borderTop: `3px solid ${quaternary}` } : { borderTop: `3px solid ${secondary}` }}></div>
      <div className="row cards">
        <div className="col">
          <Card sx={{ minWidth: 275 }} className="card" style={toggleDarkMode ? { backgroundColor: quaternary, color: secondary } : { backgroundColor: primary, color: quaternary }}>
            <CardContent className="content">
              <img src="/techdotcare.png" alt="logo" height={250} width={370} className='logo' />
              <p className="details">
              Introducing TechdotCare – a tool that enables healthcare professionals to seamlessly access patient information, 
              including diagnostic history, a list of diagnoses and their current status, lab results, and contact information.
              <br /><br />
              Technologies used: Angular 17, Chart.js
              </p>
            </CardContent>
            <CardActions>
              {/* <Button size="small">Learn More</Button> */}
            </CardActions>
          </Card>
        </div>
        <div className="col"><Card sx={{ minWidth: 275 }} className="card" style={toggleDarkMode ? { backgroundColor: quaternary, color: secondary } : { backgroundColor: primary, color: quaternary }}>
          <CardContent className="content">
            <img src="/todo.png" alt="logo" height={250} width={370} className='logo' />
            <p className="details">
              Introducing ToDoQuarry - a Todo list application using CRUD operations where we can read, create, update and delete our tasks.
              <br /><br />
              Technologies used: Angular, ASP.NET, PostgreSQL
            </p>
          </CardContent>
          <CardActions>
            {/* <Button size="small">Learn More</Button> */}
          </CardActions>
        </Card>
        </div>
        <div className="col"><Card sx={{ minWidth: 275 }} className="card" style={toggleDarkMode ? { backgroundColor: quaternary, color: secondary } : { backgroundColor: primary, color: quaternary }}>
          <CardContent className="content">
            <img src="/worldwise.png" alt="logo" height={250} width={370} className='logo' />
            <p className="details">
            Embark on a journey like never before with WorldWise, your ultimate travel companion designed to keep track of your adventures and the places you've visited.
            <br/><br/>
            Technologies used: React, Vite
            </p>
          </CardContent>
          <CardActions>
            {/* <Button size="small">Learn More</Button> */}
          </CardActions>
        </Card>
        </div>
      </div>
    </div>
  )
}

export default Projects;
