import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link } from 'react-router-dom';
import Accueil from './components/Accueil';
import ListClient from './components/ListClient';
import ListeArticle from './components/ListeArticle';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <>
      <div className='App m-auto w-50 my-4'>
        <BrowserRouter>
          <nav className='d-flex justify-content-center'>
            <Link to="/" className='btn btn-md btn-primary mx-4'>Accueil</Link>
            <Link to="/article"className='btn btn-md btn-secondary mx-4'>Article</Link>
            <Link to="/client"className='btn btn-md btn-danger mx-4'>Client</Link>
          </nav>
          {/* here <Routes> is a container to include all the route and both are components provided by react-router-dom*/}
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/article" element={<ListeArticle />} />
            <Route path="/client" element={<ListClient />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App
