import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomeInfo from '../src/pages/homes/HomeInfo';
import NoPage from './pages/NoPage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomeInfo />}/>
        <Route path='*' element={<NoPage />}/>
      </Routes>
    </div>
  );
}

export default App;
