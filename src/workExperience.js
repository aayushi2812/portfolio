import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import "./workExperience.css";

function WorkExperience({
  toggleDarkMode,
  primary,
  secondary,
  tertiary,
  quaternary,
}) {
  const experiences = [
    {
      id: 1,
      title: "Full Stack Developer Intern",
      company: "Wouessi Inc, Toronto, Canada",
      period: "Jun 2025 - Present",
      isCurrent: true,
    },
    {
      id: 2,
      title: "Frontend Developer Intern",
      company: "Gross Innovations Inc, Toronto, Canada",
      period: "Mar 2025 - Present",
      isCurrent: true,
    },
    {
      id: 3,
      title: "Prompt Engineer",
      company: "Outlier, Toronto, Canada",
      period: "Oct 2024 - Mar 2025",
    },
    {
      id: 4,
      title: "Back End Developer Intern",
      company: "Kunye Financial Inc, Waterloo, Canada",
      period: "Apr 2025",
    },
    {
      id: 5,
      title: "Systems Engineer",
      company: "Tata Consultancy Services, India",
      period: "Nov 2020 - Jan 2024",
    },
    {
      id: 6,
      title: "ASP.NET Developer",
      company: "SSM Infotech Pvt. Ltd., India",
      period: "May 2019 - June 2019",
    },
  ];
  return (
    <div
      id="workExperience"
      className="experience"
      style={
        toggleDarkMode
          ? { backgroundColor: secondary }
          : { backgroundColor: primary }
      }
    >
      <h1
        style={toggleDarkMode ? { color: quaternary } : { color: quaternary }}
      >
        Experience
      </h1>
      <div
        className="line3"
        style={
          toggleDarkMode
            ? { borderTop: `3px solid ${quaternary}` }
            : { borderTop: `3px solid ${secondary}` }
        }
      ></div>

      <div className="experience-timeline">
        {/* <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`timeline-item`}>
              { index%2!==0 &&
              <Card
                className="timeline-content"
                style={
                  toggleDarkMode
                    ? { backgroundColor: quaternary, color: secondary }
                    : { backgroundColor: primary, color: quaternary }
                }
              >
                <CardContent className="contentE">
                  <div className="contentFirstExperience">
                    <Typography className="job-title">{exp.title}</Typography>
                    <Typography className="company">{exp.company}</Typography>
                    <Typography className="period">{exp.period}</Typography>
                  </div>
                </CardContent>
              </Card>
            }
              <div className="timeline-marker"></div>

            { index%2===0 &&
              <Card
                className="timeline-content"
                style={
                  toggleDarkMode
                    ? { backgroundColor: quaternary, color: secondary }
                    : { backgroundColor: primary, color: quaternary }
                }
              >
                <CardContent className="contentE">
                  <div className="contentFirstExperience">
                    <Typography className="job-title">{exp.title}</Typography>
                    <Typography className="company">{exp.company}</Typography>
                    <Typography className="period">{exp.period}</Typography>
                  </div>
                </CardContent>
              </Card>
            }
            </div>
          ))}
        </div> */}
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            >
              {index % 2 === 0 && (
                <Card
                  className="timeline-content left-content"
                  style={
                    toggleDarkMode
                      ? { backgroundColor: quaternary, color: secondary }
                      : { backgroundColor: primary, color: quaternary }
                  }
                >
                  <CardContent className="contentE">
                    <div className="contentFirstExperience">
                      <Typography className="job-title">{exp.title}</Typography>
                      <Typography className="company">{exp.company}</Typography>
                      <Typography className="period">{exp.period}</Typography>
                    </div>
                  </CardContent>
                </Card>
              )}
              
              <div className="timeline-marker"></div>
              
              {index % 2 !== 0 && (
                <Card
                  className="timeline-content right-content"
                  style={
                    toggleDarkMode
                      ? { backgroundColor: quaternary, color: secondary }
                      : { backgroundColor: primary, color: quaternary }
                  }
                >
                  <CardContent className="contentE">
                    <div className="contentFirstExperience">
                      <Typography className="job-title">{exp.title}</Typography>
                      <Typography className="company">{exp.company}</Typography>
                      <Typography className="period">{exp.period}</Typography>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          ))}
        </div>
      </div>
      </div>
  );
}

export default WorkExperience;
