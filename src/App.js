import './App.css';

import NavBar from './components/NavBar/NavBar';
import HomePage from './containers/HomePage/HomePage';
import LoginPage from './containers/LoginPage/LoginPage';
import ExpenditurePage from './containers/ExpenditurePage/ExpenditurePage';

import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <>
      <NavBar/>
      <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/expenditure" element={<ExpenditurePage/>}/>
      </Routes>
    </>
  );
}

export default App;
