import './App.css';
import WorkExperience from './workExperience';
import Introduction from './introduction';
import Skills from './skills';
import Projects from './projects';

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
    </div>
  );
}

function Header(){
  return (
    <div className='header'>
      <nav className='nav'>
      <img src="/A.png" alt="WorldWise logo" height={50} width={50} className='logo'/>
      <ul>
        <li>
          About
        </li>
        <li>
          Experience
        </li>
        <li>
          Contact Me
        </li>
      </ul>
    </nav>
    </div>
  )
}

function Main(){
  return (
    <div>
    <div className='intro'>
      <div className='text'>
        <p className='text-first'>Hi, I am</p>
        <p className='text-second'>Aayushi Parekh </p>
        <p className='text-second'>A  Full Stack Developer</p>
      </div>
      
      <div><img src='/profile.jpg' alt='profile' height={400} width={400}/></div>
    </div>
    <Introduction />
    <Skills />
    <WorkExperience />
    <Projects />
    </div>
  )
}

export default App;
