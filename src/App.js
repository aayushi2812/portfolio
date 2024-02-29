import './App.css';
import LandingPage from './landingPage';
import WorkExperience from './workExperience';
import Introduction from './introduction';
import Skills from './skills';
import Projects from './projects';
import ContactMe from './contactMe';

function App() {
  return (
    <div className="app">
      <LandingPage />
      <Components />
    </div>
  );
}

function Components() {
  return (
    <div>
      <div className='components'>
        <Introduction />
        <Skills />
      </div>
      <Projects />
      <ContactMe />
    </div>
  )
}

export default App;
