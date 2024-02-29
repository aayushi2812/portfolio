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
    <div className="projects">
      <h1>Projects</h1>
      <div className="cards">
        <Card sx={{ minWidth: 275 }} className="card">
          <CardContent className="content">
            <img src="tcs.jpg" height={200} width={200} alt="tcs" />
          </CardContent>
          <CardActions>
            {/* <Button size="small">Learn More</Button> */}
          </CardActions>
        </Card>
        <Card sx={{ minWidth: 275 }} className="card">
          <CardContent className="content">
            <img src="tcs.jpg" height={200} width={200} alt="tcs" />
          </CardContent>
          <CardActions>
            {/* <Button size="small">Learn More</Button> */}
          </CardActions>
        </Card>
        <Card sx={{ minWidth: 275 }} className="card">
          <CardContent className="content">
            <img src="tcs.jpg" height={200} width={200} alt="tcs" />
          </CardContent>
          <CardActions>
            {/* <Button size="small">Learn More</Button> */}
          </CardActions>
        </Card>
      </div>
    </div>
  )
}

export default projects
