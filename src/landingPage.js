import './landingPage.css'
import WorkExperience from './workExperience';
import Introduction from './introduction';
import Skills from './skills';
import Projects from './projects';
import ContactMe from './contactMe';
import { forwardRef, useEffect, useRef, useState } from 'react';
import { Collapse } from 'bootstrap';
import { Box, Drawer, List, ListItem, ListItemButton, Theme, ThemeProvider, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useTheme } from '@emotion/react';
import { Brightness4Outlined, Brightness4Rounded, Brightness7Outlined, Brightness7Rounded, Brightness7Sharp } from '@material-ui/icons';


function LandingPage({ theme, toggleDarkMode, toggleDarkTheme }) {
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;
  const tertiary = theme.palette.tertiary.main;
  const quaternary = theme.palette.quaternary.main;
  console.log(secondary)

  return (
    <div id='home' className='elements'>
      <section className='landingPage'>
        <HeaderBar toggleDarkMode={toggleDarkMode} primary={primary} secondary={secondary} tertiary={tertiary} quaternary={quaternary} toggleDarkTheme={toggleDarkTheme} />
        <div className='components'>
          <Introduction toggleDarkMode={toggleDarkMode} primary={primary} secondary={secondary} tertiary={tertiary} quaternary={quaternary} />
          <Skills toggleDarkMode={toggleDarkMode} primary={primary} secondary={secondary} tertiary={tertiary} quaternary={quaternary} />
        </div>
        <WorkExperience toggleDarkMode={toggleDarkMode} primary={primary} secondary={secondary} tertiary={tertiary} quaternary={quaternary} />
        <Projects toggleDarkMode={toggleDarkMode} primary={primary} secondary={secondary} tertiary={tertiary} quaternary={quaternary} />
        <ContactMe toggleDarkMode={toggleDarkMode} primary={primary} secondary={secondary} tertiary={tertiary} quaternary={quaternary} />
      </section>
    </div>
  )
}

function HeaderBar({ toggleDarkMode, primary, secondary, tertiary, quaternary, toggleDarkTheme }) {
  const [open, setOpen] = useState(false);

  const theme = useTheme();

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
        <ListItem key='Skills' onClick={() => scrollToSection("skills")}>
          <ListItemButton>
            {/* <ListItemIcon>
              </ListItemIcon> */}
            <ListItemText primary='Skills' />
          </ListItemButton>
        </ListItem>
        <ListItem key='Experience' onClick={() => scrollToSection("experience")}>
          <ListItemButton>
            {/* <ListItemIcon>
              </ListItemIcon> */}
            <ListItemText primary='Experience' />
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
        <nav className='nav' style={{ backgroundColor: primary, color: quaternary, borderColor: secondary, borderBottom: '3px solid #CBE4DE' }}>
          <img src={toggleDarkMode ? "/A-db.jpg" : "/A-teal.png"} alt="logo" height={60} width={60} className='logo' onClick={() => scrollToSection("home")} />
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
              <li>
                <IconButton sx={{ ml: 1 }} onClick={toggleDarkTheme} color="inherit">
                  {theme.palette.mode === 'dark' ? <Brightness7Rounded style={{fontSize: '30px'}}/> : <Brightness4Rounded style={{fontSize: '30px'}}/>}
                </IconButton>
              </li>
            </ul>
          </div>
          <div class='d-md-none d-xs-block' style={{display: 'flex'}}>
            <IconButton sx={{ ml: 1 }} onClick={toggleDarkTheme} color="inherit">
              {theme.palette.mode === 'dark' ? <Brightness7Rounded style={{fontSize: '40px'}}/> : <Brightness4Rounded style={{fontSize: '40px'}}/>}
            </IconButton>
            <label class="burger" for="burger" onClick={toggleDrawer(true)}>
              <input type="checkbox" id="burger" />
              <span style={toggleDarkMode ? { background: quaternary } : { background: quaternary }}></span>
              <span style={toggleDarkMode ? { background: quaternary } : { background: quaternary }}></span>
              <span style={toggleDarkMode ? { background: quaternary } : { background: quaternary }}></span>
            </label>
          </div>
          <Drawer anchor='top' open={open} style={{backgroundColor: secondary}}>
            {DrawerList}
          </Drawer>
        </nav>
      </div>
      <div className='intro' style={{ backgroundColor: primary, color: quaternary }}>
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
          <div class="col-xs-5 col-md-4"><button class="btn btn-landing-page" onMouseOver={(e) => { e.target.style.backgroundColor = primary; e.target.style.color = quaternary }} style={{ backgroundColor: quaternary, color: secondary }} onMouseLeave={(e) => { e.target.style.backgroundColor = quaternary; e.target.style.color = secondary }} onClick={() => scrollToSection("introduction")}>
            View more about me</button>
            <a href={require("./AayushiParekh.pdf")} download="Aayushi Parekh - Resume" target="_blank" rel="noreferrer">
              <button class="btn btn-landing-page" onMouseEnter={(e) => { e.target.style.backgroundColor = primary; e.target.style.color = quaternary }} onMouseLeave={(e) => { e.target.style.backgroundColor = quaternary; e.target.style.color = secondary }} style={{ backgroundColor: quaternary, color: secondary }}>
                Resume<i class="bi bi-download"></i></button></a>
          </div>
          <div class="col-xs-4 col-md-2"></div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage