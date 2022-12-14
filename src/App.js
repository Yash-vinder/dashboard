
import './App.css';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Bounties from './components/HeaderC/Bounties';
import NotFound from './components/NotFound';
import Submission from './components/HeaderC/Submission';
import Approved from './components/HeaderC/Approved';
import Bucket from './components/HeaderC/Bucket';
import Navbar from './components/D-elements/Navbar';

function App() {
  return (
    <>
     <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
      <Route path='/bounties' element={<Bounties/>}/>
      <Route path='*' element={<NotFound/>}/>
      <Route path='/submission' element={<Submission/>} />
      <Route path='/approved' element={<Approved/>}/>
      <Route path='/bucket' element={<Bucket/>}/>
      </Routes>
      </Router>
    </>
  );
}

export default App;
