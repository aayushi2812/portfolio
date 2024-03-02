import { Card, CardContent } from "@mui/material";
import "./introduction.css";

function introduction() {
  return (
    <div>
      <Card className="card-intro">
        <CardContent>
        <h1>Introduction</h1>
          <div className="container-fluid intro-data">
            <div className="row">
              <div class="col-md-6">
                <img src='/profile.jpg' className="imgStyle" alt='profile' height={300} width={300} />
              </div>
              <div class="col-md-6">
                <p>
                  A dedicated Software Developer with more than three years of
                  experience specializing in the development of robust banking
                  applications and systems with expertise in both front-end and
                  back-end technologies passionate about leveraging technical
                  expertise to contribute to innovative projects eager to join a
                  forward-thinking company to further enhance skills and deliver
                  top-tier solutions
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default introduction;
