import React from 'react';
import './App.css'
import { Route, Link, Routes } from 'react-router-dom';
import PostTable from './components/PostTable';
import PostDetails from './components/PostDetails';
import Home from './components/Home';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import CopyrightIcon from '@mui/icons-material/Copyright';


const App = () => {
  return (

    <div>
      <div className='navbar'>
        <Link to='/posttable'><BackupTableIcon/><span style={{margin:"10px"}}>PostTable</span></Link>

      </div>

      <Routes>
      <Route path="/" element={<Home/>} />

        <Route path="/posttable" element={<PostTable/>} />
        <Route path="/postdetails" element={<PostDetails/>} />
      </Routes>

      
    </div>
  );
};

export default App;
