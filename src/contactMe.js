import { Card, CardContent } from "@mui/material";
import './contactMe.css';
import { Button } from "bootstrap";
import { useState } from "react";
function ContactMe() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
    alert(`Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`
    );
  }
  return (
    <div className="contactMeCard">
      <Card className="contactMe-card-intro">
        <CardContent>
          <h1>Contact Me</h1>
          <h5>Have a question or want to work together?</h5>
          <form className="form" onSubmit={handleSubmit}>
            <input className='inputTag' name="name" type="name" id="name" value={formData.name} onChange={handleChange} placeholder="Name" required></input><br />
            <input className='inputTag' name="email" type="email" id="email" value={formData.email} onChange={handleChange} placeholder="Email" required></input><br />
            <input className='inputTagMessage' name="message" type="text" id="message" value={formData.message0} onChange={handleChange} placeholder="Message" required></input><br />
            <button class="btn submitButton" type="submit">Submit</button>
          </form>
          <div className="backontop">
            <button class="button buttontotop">
            <svg class="svgIcon" viewBox="0 0 384 512">
              <path
                d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
              ></path>
            </svg>
          </button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
export default ContactMe