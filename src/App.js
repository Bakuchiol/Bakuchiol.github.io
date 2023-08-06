import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomeInfo from '../src/pages/homes/HomeInfo';
import NoPage from './pages/NoPage'
import ProjectPage from './pages/ProjectPage';
import SelectedPage from './pages/SelectedPage';
// import About from './components/about/About';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomeInfo />}/>
        {/* <Route path='/about' element={<About />}/> */}
        <Route path='/Space-Battle' element={<ProjectPage />}/>
        <Route path='/Gucci-MockUp' element={<SelectedPage />}/>
        <Route path='*' element={<NoPage />}/>
      </Routes>
    </div>
  );
}

export default App;
