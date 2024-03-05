import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import "./projects.css";

function projects() {
  return (
    <div id="projects" className="projects">
      <h1>Projects</h1>
      <div className="line2"></div>
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
