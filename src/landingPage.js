import './landingPage.css'
import WorkExperience from './workExperience';
import Introduction from './introduction';
import Skills from './skills';
import Projects from './projects';
import ContactMe from './contactMe';
import { forwardRef, useEffect, useRef, useState } from 'react';
import { Collapse } from 'bootstrap';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

function landingPage() {
  // const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <div id='home' className='elements'>
      <section className='landingPage'>
        <HeaderBar />
        <div className='components'>
          <Introduction />
          <Skills />
        </div>
        <WorkExperience />
        <Projects />
        <ContactMe />
      </section>
    </div>
  )
}

function HeaderBar() {  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const DrawerList = (
    <Box sx={{ width: '100%' }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
      <i class="bi bi-x" onClick={toggleDrawer(false)}></i>
        {/* {['About', 'Projects', 'Resume', 'Contact Me'].map((text, index) => ( */}
          <ListItem key='About' onClick={() => scrollToSection("introduction")}>
            <ListItemButton>
              {/* <ListItemIcon>
              </ListItemIcon> */}
              <ListItemText primary='About' />
            </ListItemButton>
          </ListItem>
          <ListItem key='Skills' onClick={() => scrollToSection("introduction")}>
            <ListItemButton>
              {/* <ListItemIcon>
              </ListItemIcon> */}
              <ListItemText primary='Skills' />
            </ListItemButton>
          </ListItem>
          <ListItem key='Experience' onClick={() => scrollToSection("introduction")}>
            <ListItemButton>
              {/* <ListItemIcon>
              </ListItemIcon> */}
              <ListItemText primary='Skills' />
            </ListItemButton>
          </ListItem>
          <ListItem key='Projects' onClick={() => scrollToSection("projects")}>
            <ListItemButton>
              {/* <ListItemIcon>
              </ListItemIcon> */}
              <ListItemText primary='Projects' />
            </ListItemButton>
          </ListItem>
          <ListItem key='Contact Me' onClick={() => scrollToSection("contactMe")}>
            <ListItemButton>
              {/* <ListItemIcon>
              </ListItemIcon> */}
              <ListItemText primary='Contact Me' />
            </ListItemButton>
          </ListItem>
        {/* ))} */}
      </List>
    </Box>
  );


  return (
    <div className='container-fluid'>
      <div className='row header'>
        <nav className='nav'>
          <img src="/A-teal.png" alt="logo" height={60} width={60} className='logo' onClick={() => scrollToSection("home")}/>
          <div class='d-none d-md-block'>
            <ul>
              <li onClick={() => scrollToSection("introduction")}>
                About
              </li>
              <li onClick={() => scrollToSection("skills")}>
                Skills
              </li>
              <li onClick={() => scrollToSection("experience")}>
                Experience
              </li>
              <li onClick={() => scrollToSection("projects")}>
                Projects
              </li>
              <li onClick={() => scrollToSection("contactMe")}>
                Contact Me
              </li>
            </ul>
          </div>
          <div class='d-md-none d-xs-block'>
            <label class="burger" for="burger" onClick={toggleDrawer(true)}>
              <input type="checkbox" id="burger" />
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
          <Drawer anchor='top' open={open} >
            {DrawerList}
          </Drawer>
        </nav>
      </div>
      <div className='intro'>
        <div className='row'>
          <div class="col-xs-4 col-md-2"></div>
          <div class="col-xs-10 col-md-8">
            <p className='text-first'>Hi, I am <p className='text-second1'>Aayushi Parekh</p> 
            </p>
          </div>
          <div class="col-xs-4 col-md-2"></div>
        </div><br />
        <div className='row'>
          <div class="col-xs-4 col-md-2"></div>
          <div class="col-xs-10 col-md-8"><p className='text-second2'>A  Full Stack Developer</p></div>
          <div class="col-xs-4 col-md-2"></div>
        </div><br />
        <div className='row'>
          <div class="col-xs-4 col-md-2"></div>
          <div class="col-xs-5 col-md-4"><button class="btn btn-landing-page" onClick={() => scrollToSection("introduction")}>
            View more about me</button>
            <a href={require("./AayushiParekh.pdf")} download="Aayushi Parekh - Resume" target="_blank" rel="noreferrer"><button class="btn btn-landing-page">
            Resume<i class="bi bi-download"></i></button></a>
            </div>
          <div class="col-xs-4 col-md-2"></div>
        </div>
      </div>
    </div>
  )
}

export default landingPage