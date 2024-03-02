import './landingPage.css'
import WorkExperience from './workExperience';
import Introduction from './introduction';
import Skills from './skills';
import Projects from './projects';
import ContactMe from './contactMe';
import { useEffect, useState } from 'react';
import { Collapse } from 'bootstrap';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

function landingPage() {
  return (
    <div className='elements'>
      <section className='landingPage'>
        <HeaderBar />
        <div className='components'>
          <Introduction />
          <Skills />
        </div>
        <Projects />
        <ContactMe />
      </section>
    </div>
  )
}

function HeaderBar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: '100%' }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
      <i class="bi bi-x" onClick={toggleDrawer(false)}></i>
        {['About', 'Projects', 'Resume', 'Contact Me'].map((text, index) => (
          <ListItem key={text}>
            <ListItemButton>
              {/* <ListItemIcon>
              </ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );


  return (
    <div className='container-fluid'>
      <div className='row header'>
        <nav className='nav'>
          <img src="/A-teal.png" alt="logo" height={60} width={60} className='logo' />
          <div class='d-none d-md-block'>
            <ul>
              <li>
                About
              </li>
              <li>
                Projects
              </li>
              <li>
                Resume
              </li>
              <li>
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
          <div class="col-xs-10 col-md-8"><p className='text-first'>Hi, I am <span className='text-second'>Aayushi Parekh</span></p></div>
          <div class="col-xs-4 col-md-2"></div>
        </div><br />
        <div className='row'>
          <div class="col-xs-4 col-md-2"></div>
          <div class="col-xs-10 col-md-8"><p className='text-second'>A  Full Stack Developer</p></div>
          <div class="col-xs-4 col-md-2"></div>
        </div><br />
        <div className='row'>
          <div class="col-xs-4 col-md-2"></div>
          <div class="col-xs-10 col-md-8"><button class="btn btn-landing-page">View more about me</button></div>
          <div class="col-xs-4 col-md-2"></div>
        </div>
      </div>
    </div>
  )
}

export default landingPage