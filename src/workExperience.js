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
    <>
      <h1>Work Experience</h1>
      <div className="cardsExperience">
        <Card sx={{ minWidth: 275 }} className="cardExperience">
          <CardContent className="contentExperience">
            <div className="contentFirstExperience">
              <img src="tcs.jpg" height={70} width={70} alt="tcs" />
              <Typography variant="h6" component="div">
                Tata Consultancy Services
              </Typography>
              <Typography sx={{ mb: 2 }}>Software Engineer</Typography>
              <Typography sx={{ fontSize: 14 }} gutterBottom>
                Nov 2020 - Jan 2023
              </Typography>
            </div>
          </CardContent>
          <CardActions>
            {/* <Button size="small">Learn More</Button> */}
          </CardActions>
        </Card>
        <Card sx={{ minWidth: 275 }} className="cardExperience">
          <CardContent className="contentExperience">
            <div className="contentFirstExperience">
              <img src="ssm.jpg" height={70} width={70} alt="ssm" />
              <Typography variant="h6" component="div" className="textFirst">
                SSM Infotech Pvt. Ltd.
              </Typography>
              <Typography sx={{ mb: 2 }}>ASP.NET Developer</Typography>
              <Typography sx={{ fontSize: 14 }} gutterBottom>
                Nov 2020 - Jan 2023
              </Typography>
            </div>
          </CardContent>
          <CardActions>
            {/* <Button size="small">Learn More</Button> */}
          </CardActions>
        </Card>
        <Card sx={{ minWidth: 275 }} className="cardExperience">
          <CardContent className="contentExperience">
            <div className="contentFirstExperience">
              <img src="fgrade.jpg" height={70} width={70} alt="fgrade" />
              <Typography variant="h6" component="div" className="textFirst">
                FGrade Global Services
              </Typography>
              <Typography sx={{ mb: 2 }}>Technical Content Writer</Typography>
              <Typography sx={{ fontSize: 14 }} gutterBottom>
                Nov 2020 - Jan 2023
              </Typography>
            </div>
          </CardContent>
          <CardActions>
            {/* <Button size="small">Learn More</Button> */}
          </CardActions>
        </Card>
      </div>
    </>
  );
}

export default workExperience;
