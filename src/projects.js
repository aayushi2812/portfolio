import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import "./projects.css";

function Projects({
  toggleDarkMode,
  primary,
  secondary,
  tertiary,
  quaternary,
}) {
  const handleClick = (event) => {
    const url =
      "https://www.figma.com/proto/CEpngsNW5mJJjgnc1uExBp/Feet-Off-the-Ground?node-id=1-2&node-type=CANVAS&t=zb1cMvDQEcCkPTsD-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2";
    window.open(url, "_blank");
  };

  return (
    <div
      id="projects"
      className="projects"
      style={
        toggleDarkMode
          ? { backgroundColor: secondary }
          : { backgroundColor: primary }
      }
    >
      <h1
        style={toggleDarkMode ? { color: quaternary } : { color: quaternary }}
      >
        Projects
      </h1>
      <div
        className="line2"
        style={
          toggleDarkMode
            ? { borderTop: `3px solid ${quaternary}` }
            : { borderTop: `3px solid ${quaternary}` }
        }
      ></div>
      <div className="row cards">
        <div className="col">
          <Card
            sx={{ minWidth: 275 }}
            className="card"
            style={
              toggleDarkMode
                ? { backgroundColor: quaternary, color: secondary }
                : { backgroundColor: primary, color: quaternary }
            }
          >
            <CardContent className="content">
              <img src="/itprepmate.png" alt="logo" className="projectImage" />
              <p className="details">
                ITPrepMate – a platform dedicated to helping others
                navigate their career journeys in tech as a newcomer to Canada.
                <br />
                <br />
                Technologies used: React, HTML, CSS, Figma
              </p>
              <a
                style={
                  toggleDarkMode
                    ? { backgroundColor: quaternary, color: secondary }
                    : { backgroundColor: primary, color: quaternary }
                }
                href="https://itprepmate.netlify.app/"
                target="_blank"
              >
                View Project <i class="bi bi-arrow-right"></i>
              </a>
            </CardContent>
          </Card>
        </div>
        <div className="col">
          <Card
            sx={{ minWidth: 275 }}
            className="card"
            style={
              toggleDarkMode
                ? { backgroundColor: quaternary, color: secondary }
                : { backgroundColor: primary, color: quaternary }
            }
          >
            <CardContent className="content">
              <img src="/techdotcare.png" alt="logo" className="projectImage" />
              <p className="details">
                TechdotCare – a tool that enables healthcare
                professionals to seamlessly access patient information, like
                diagnostic history and contact information.
                <br />
                <br />
                Technologies used: Angular 17, Chart.js
              </p>
              <a
                style={
                  toggleDarkMode
                    ? { backgroundColor: quaternary, color: secondary }
                    : { backgroundColor: primary, color: quaternary }
                }
                href="https://techdotcare.netlify.app/"
                target="_blank"
              >
                View Project <i class="bi bi-arrow-right"></i>
              </a>
            </CardContent>
          </Card>
        </div>
        <div className="col">
          <Card
            sx={{ minWidth: 275 }}
            className="card"
            style={
              toggleDarkMode
                ? { backgroundColor: quaternary, color: secondary }
                : { backgroundColor: primary, color: quaternary }
            }
          >
            <CardContent className="content">
              <img src="/dsd.png" alt="logo" className="projectImage" />
              <p className="details">
                Dark Sky Destinations - Ultimate app for Stargazing enthusiasts and astronomy lovers. 
                Checkout the application code in Github.
                <br />
                <br />
                Technologies used: Kotlin, Jetpack Compose
              </p>
              <a
                style={
                  toggleDarkMode
                    ? { backgroundColor: quaternary, color: secondary }
                    : { backgroundColor: primary, color: quaternary }
                }
                href="https://darkskydestinations.netlify.app/"
                target="_blank"
              >
                View Project <i class="bi bi-arrow-right"></i>
              </a>
            </CardContent>
          </Card>
        </div>
        <div className="col">
          <Card
            sx={{ minWidth: 275 }}
            className="card"
            style={
              toggleDarkMode
                ? { backgroundColor: quaternary, color: secondary }
                : { backgroundColor: primary, color: quaternary }
            }
          >
            <CardContent className="content">
              <img src="/ios.png" alt="logo" className="projectImage" />
              <p className="details">
                Stock Application – an iOS app designed to help users monitor and 
                track their favorite stocks efficiently. 
                <br />
                <br />
                Technologies used: Swift
              </p>
              <a
                style={
                  toggleDarkMode
                    ? { backgroundColor: quaternary, color: secondary }
                    : { backgroundColor: primary, color: quaternary }
                }
                href="https://stocks-application.netlify.app/"
                target="_blank"
              >
                View Project <i class="bi bi-arrow-right"></i>
              </a>
            </CardContent>
          </Card>
        </div>
        <div className="col">
          <Card
            sx={{ minWidth: 275 }}
            className="card"
            style={
              toggleDarkMode
                ? { backgroundColor: quaternary, color: secondary }
                : { backgroundColor: primary, color: quaternary }
            }
          >
            <CardContent className="content">
              <img src="/todo.png" alt="logo" className="projectImage" />
              <p className="details">
                ToDoQuarry - a Todo list application using CRUD
                operations where we can read, create, update and delete our
                tasks.
                <br />
                <br />
                Technologies used: Angular, ASP.NET, PostgreSQL
              </p>
              <a
                style={
                  toggleDarkMode
                    ? { backgroundColor: quaternary, color: secondary }
                    : { backgroundColor: primary, color: quaternary }
                }
                href="https://todoquarry.netlify.app/"
                target="_blank"
              >
                View Project <i class="bi bi-arrow-right"></i>
              </a>
            </CardContent>
          </Card>
        </div>
        <div className="col">
          <Card
            sx={{ minWidth: 275 }}
            className="card"
            style={
              toggleDarkMode
                ? { backgroundColor: quaternary, color: secondary }
                : { backgroundColor: primary, color: quaternary }
            }
          >
            <CardContent className="content">
              <img src="/worldwise.png" alt="logo" className="projectImage" />
              <p className="details">
                WorldWise - Ultimate travel companion designed to
                keep track of your adventures and the places you've visited.
                <br />
                <br />
                Technologies used: React, Vite
              </p>
              <a
                style={
                  toggleDarkMode
                    ? { backgroundColor: quaternary, color: secondary }
                    : { backgroundColor: primary, color: quaternary }
                }
                href="https://worldwise-adventures-tracker.netlify.app/"
                target="_blank"
              >
                View Project <i class="bi bi-arrow-right"></i>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Projects;
