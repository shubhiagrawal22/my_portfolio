import './App.css';
import ContactMe from './components/ContactMe/ContactMe';
import NavBar from './components/NavBar/NavBar';
import Skills from './components/Skills/Skills';
import WorkExperience from './components/Work/WorkExperience';
import Character from './components/character/Character';

function App() {
  return (
    <>
      <NavBar />
      <div className='container'>
        <Character />
        <Skills />
        <WorkExperience />
        <ContactMe />
      </div>
    </>
  );
}

export default App;
