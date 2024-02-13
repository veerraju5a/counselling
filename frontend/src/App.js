
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import SignUp from './components/Register';
import React from 'react';
import Home from './components/Home';
import Counsellor from './components/Counsellor';
import Session from './components/Session';
import Appointment from './components/Appointment';
import SignIn from './components/Signin';
import Show from './components/Show';

function App() {
  return <React.Fragment>
     <header>
      <Header/>
     </header>
     <main>
      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/signin" element={<SignIn/>} exact />
        <Route path="/signup" element={<SignUp/>} exact />
        <Route path="/show" element={<Show/>} exact />
        <Route path="/session" element={<Session/>} exact />
        <Route path="/appointment" element={<Appointment/>} exact />
      </Routes>
     </main>
  </React.Fragment>
    
}

export default App;
