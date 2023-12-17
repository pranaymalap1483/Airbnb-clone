// import { useState } from 'react'

import './App.css'
import { Route,Routes } from 'react-router-dom';
import IndexPage1 from './pages/IndexPage1.jsx';
import Login from './pages/Login';
import Layout from './Layout';
import Register from './pages/Register';
import axios from 'axios';
import { UserContextProvider } from './UserContext';
import PlacesPage from './pages/PlacesPages.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import PlacesFormPage from './pages/PlacesFormPage.jsx';
import PlacePage from './pages/PlacePage.jsx';
import BookingsPage from './pages/BookingsPage.jsx';
import BookingPage from './pages/BookingPage.jsx';


axios.defaults.baseURL = 'http://localhost:4000/';
axios.defaults.withCredentials = true;


function App () {

  return (
 
    <UserContextProvider>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<IndexPage1/> } />
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/account/" element={<ProfilePage/>}/>
      <Route path="/account/places" element={<PlacesPage/>}/>
      <Route path="/account/places/new" element={<PlacesFormPage/>}/>
      <Route path="/account/places/:id" element={<PlacesFormPage/>}/>
      <Route path="/place/:id" element={<PlacePage/>}/>
      <Route path="/account/bookings" element={<BookingsPage/>}/>
      <Route path="/account/bookings/:id" element={<BookingPage/>}/>
      </Route>
    </Routes>
    </UserContextProvider>
    );
  }

export default App;
