import React, {useContext} from 'react';
import './App.css';
// import Header from './components/Header/Header'
import Form from './components/Form/Form'
import Main from "./Pages/Main/Main";
import {Routes, Route} from "react-router-dom";
import MoviePage from "./Pages/MoviePage/MoviePage";
import SignIn from "./Pages/SignIn/SignIn";
import NotePage from "./Pages/NotPage/NotePage";

const App = () => {
        return (
                <Routes>
                    <Route path='/' element={<SignIn />}/>
                    <Route path='/news' element={<Main />}/>
                    <Route path="/news/:id" element={<MoviePage />}/>
                    <Route path='*' element={<NotePage />}/>
                </Routes>
        );
}

export default App;
