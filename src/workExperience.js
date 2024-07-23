import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import "./workExperience.css";

function WorkExperience({toggleDarkMode, primary, secondary, tertiary, quaternary}) {
  return (
    <div id="workExperience" className="experience" style={toggleDarkMode ? { backgroundColor: secondary } : { backgroundColor: "white" }}>
      <h1 style={toggleDarkMode ? { color: quaternary } : { color: secondary }}>Experience</h1>
      <div className="line3" style={toggleDarkMode ? {borderTop: `3px solid ${quaternary}`} : {borderTop: `3px solid ${secondary}`}}></div>
      <div className="row cardsE">
        <div className="col">
          <Card sx={{ minWidth: 275 }} className="cardE" style={toggleDarkMode ? { backgroundColor: quaternary, color: secondary } : { backgroundColor: primary, color: quaternary }}>
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
          <Card sx={{ minWidth: 275 }} className="cardE" style={toggleDarkMode ? { backgroundColor: quaternary, color: secondary } : { backgroundColor: primary, color: quaternary }}>
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
                Hands-on experience in developing responsive UX product using ASP.NET and learning best practices in development.

                </Typography>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="col">
          <Card sx={{ minWidth: 275 }} className="cardE" style={toggleDarkMode ? { backgroundColor: quaternary, color: secondary } : { backgroundColor: primary, color: quaternary }}>
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
                Authored compelling articles, and website content on various technical topics like AI, ML, SEO etc.
                </Typography>
              </div>
            </CardContent>
          </Card>
        </div>
        
      </div>
    </div>
  );
}

export default WorkExperience;
