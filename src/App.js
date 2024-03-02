import './App.css';
import LandingPage from './landingPage';
import WorkExperience from './workExperience';
import Introduction from './introduction';
import Skills from './skills';
import Projects from './projects';
import ContactMe from './contactMe';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<LandingPage />}>
      </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
