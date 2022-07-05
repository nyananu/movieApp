import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieDetail from "./components/MovieDetail/MovieDetail";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Footer from "./components/Footer/Footer";
import './App.scss';

function App() {
  return (
    <div className="App">
        <Router>
            <Header />
            <div className='container'>
            <Routes>
                <Route path='/' exact element={<Home/>} />
                <Route path='/movie/:imdbID' element={<MovieDetail/>} />
                <Route element={<PageNotFound/>} />
            </Routes>
            </div>
            <Footer/>
        </Router>
    </div>
  );
}

export default App;
