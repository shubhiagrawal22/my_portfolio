import './App.css';
import NavBar from './components/NavBar/NavBar';
import Character from './components/character/Character';

function App() {
  return (
    <>
      <NavBar />
      <div className='container'>
        <Character />
      </div>
    </>
  );
}

export default App;
