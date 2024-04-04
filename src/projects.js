import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import "./projects.css";

function projects({toggleDarkMode, primary, secondary, tertiary, quaternary}) {
  return (
    <div id="projects" className="projects" style={toggleDarkMode ? { backgroundColor: secondary } : { backgroundColor: "white" }}>
      <h1 style={toggleDarkMode ? { color: quaternary } : { color: secondary }}>Projects</h1>
      <div className="line2" style={toggleDarkMode ? {borderTop: `3px solid ${quaternary}`} : {borderTop: `3px solid ${secondary}`}}></div>
      <div className="row cards">
        <div className="col">
        <Card sx={{ minWidth: 275 }} className="card">
          <CardContent className="content">
            <img src="/worldwise.png" alt="logo" height={300} width={400} className='logo' />
          </CardContent>
          <CardActions>
            {/* <Button size="small">Learn More</Button> */}
          </CardActions>
        </Card>
        </div>
        <div className="col"><Card sx={{ minWidth: 275 }} className="card">
          <CardContent className="content">
          <img src="/worldwise.png" alt="logo" height={300} width={400} className='logo' />
          </CardContent>
          <CardActions>
            {/* <Button size="small">Learn More</Button> */}
          </CardActions>
        </Card>
        </div>
        <div className="col"><Card sx={{ minWidth: 275 }} className="card">
          <CardContent className="content">
          <img src="/worldwise.png" alt="logo" height={300} width={400} className='logo' />
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

export default projects
