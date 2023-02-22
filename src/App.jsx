import './App.css';
import Candidate from './components/candidate/Candidate';
import Header from './components/header/Header';
import SideBar from './components/sideBar/SideBar';

function App() {
  return (
    <div className="App">
        <Header/>
        <SideBar/>
        <Candidate/>
    </div>
  );
}

export default App;
