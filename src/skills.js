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
    <div>
      <h1>Skills</h1>
      <div className="cardsSkills">
        <Card sx={{ minWidth: 275 }} className="cardSkills">
          <CardContent className="contentSkills">
            <i class="bi bi-code-slash icon"></i>
            <Typography variant="h6" component="div">
              Frontend technologies
            </Typography>
            <Typography sx={{ mb: 2 }} classname="oneLiner">
              I like giving ideas shape
            </Typography>
            <Typography sx={{ fontSize: 16 }} gutterBottom>
              HTML
              <br /> CSS
              <br /> JavaScript
              <br /> Angular
              <br /> React
              <br /> Vue.js
            </Typography>
          </CardContent>
          <CardActions>
            {/* <Button size="small">Learn More</Button> */}
          </CardActions>
        </Card>
        <Card sx={{ minWidth: 275 }} className="cardSkills">
          <CardContent className="contentSkills">
            <i class="bi bi-terminal icon"></i>
            <Typography variant="h6" component="div">
              Backend technologies
            </Typography>
            <Typography sx={{ mb: 2 }} classname="oneLiner">
              I like finding solutions
            </Typography>
            <Typography sx={{ fontSize: 16 }} gutterBottom>
              C <br /> C++
              <br /> Java
              <br /> Spring Boot
              <br /> Python
              <br />
              Node.js
              <br /> MySQL
              <br />
              PHP
              <br /> ASP. Net
              <br /> Android
            </Typography>
          </CardContent>
          <CardActions>
            {/* <Button size="small">Learn More</Button> */}
          </CardActions>
        </Card>
        <Card sx={{ minWidth: 275 }} className="cardSkills">
          <CardContent className="contentTools">
            <i class="bi bi-tools icon"></i>
            <Typography variant="h6" component="div">
              Tools & Platforms
            </Typography>
            <Typography sx={{ fontSize: 14 }} className="info" gutterBottom>
              <br />
              <b>IDEs </b>: Visual Studio Code, Eclipse, IntelliJ IDEA
              <br />
              <br />
              <b>Version Control Systems</b>: Git, Bitbucket <br />
              <br />
              <b>Build & Dependency Management</b>: Maven
              <br />
              <br />
              <b>CI/CD Pipeline</b>: Jenkins
              <br />
              <br />
              <b>Containerization</b>: Docker
              <br />
              <br />
              <b>Testing Frameworks</b>: JUnit, Jasmine, Karma
              <br />
              <br />
              <b>Collaboration & Communication</b>: Jira, Confluence, MS Teams
              <br />
              <br />
              <b>Code Quality & Analysis</b>: SonarQube
              <br />
              <br />
              <b>Security</b>: Contrast Security <br />
              <br />
            </Typography>
          </CardContent>
          <CardActions>
            {/* <Button size="small">Learn More</Button> */}
          </CardActions>
        </Card>
      </div>
    </div>
  );
}

export default skills;
