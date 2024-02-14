import './App.css';
import Certificate from './components/Certificates/Certificate';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Skills from './components/Skills/Skills';
import WorkExperience from './components/Work/WorkExperience';
import Character from './components/character/Character';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <div className='container'>
        <Character />
        <Skills />
        <WorkExperience />
        <Certificate />
        <ContactMe />
      </div>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
