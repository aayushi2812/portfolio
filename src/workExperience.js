import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import "./workExperience.css";

function workExperience() {
  return (
    <div id="experience" className="projectsE">
      <h1>Experience</h1>
      <div className="line3"></div>
      <div className="row cardsE">
        <div className="col">
          <Card sx={{ minWidth: 275 }} className="cardE">
            <CardContent className="contentE">
              <div className="contentFirstExperience">
              <img src="tcs.jpg" height={70} width={70} alt="tcs" className="imageE"/>
                <Typography variant="h6" component="div" className="textFirst">
                Tata Consultancy Services
                </Typography>
                <Typography sx={{ mb: 2 }}>Systems Engineer</Typography>
                <Typography sx={{ fontSize: 14 }} gutterBottom>
                  Nov 2020 - Jan 2023
                </Typography>
                <Typography sx={{ mb:2 }} gutterBottom className="info">
                Worked as Full Stack Developer majorly with Angular and Spring Boot specializing in the development of robust Banking applications and systems. 
                </Typography>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="col">
          <Card sx={{ minWidth: 275 }} className="cardE">
            <CardContent className="contentE">
              <div className="contentFirstExperience">
              <img src="ssm.jpg" height={70} width={70} alt="ssm" className="imageE"/>
                <Typography variant="h6" component="div" className="textFirst">
                SSM Infotech Pvt. Ltd.
                </Typography>
                <Typography sx={{ mb: 2 }}>ASP.NET Developer</Typography>
                <Typography sx={{ fontSize: 14 }} gutterBottom>
                  May 2019 - June 2019
                </Typography>
                <Typography sx={{ mb:2 }} gutterBottom className="info">
                Hands-on experience in developing dynamic and responsive web applications using ASP.NET.

                </Typography>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="col">
          <Card sx={{ minWidth: 275 }} className="cardE">
            <CardContent className="contentE">
              <div className="contentFirstExperience">
                <img src="fgrade.jpg" height={70} width={70} alt="fgrade" className="imageE"/>
                <Typography variant="h6" component="div" className="textFirst">
                  FGrade Global Services
                </Typography>
                <Typography sx={{ mb: 2 }}>Technical Content Writer</Typography>
                <Typography sx={{ fontSize: 14 }} gutterBottom>
                Oct 2017 - Feb 2018
                </Typography>
                <Typography sx={{ mb:2 }} gutterBottom className="info">
                Authored compelling articles, and website content on various technical topics like AI, SEO etc.
                </Typography>
              </div>
            </CardContent>
          </Card>
        </div>
        
      </div>
    </div>
  );
}

export default workExperience;
