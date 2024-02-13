import './App.css';
import NavBar from './components/NavBar/NavBar';
import Skills from './components/Skills/Skills';
import Character from './components/character/Character';

function App() {
  return (
    <>
      <NavBar />
      <div className='container'>
        <Character />
        <Skills />
      </div>
    </>
  );
}

export default App;
