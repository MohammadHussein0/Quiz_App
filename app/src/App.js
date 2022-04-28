import React from 'react'
import {Route, Routes,} from 'react-router-dom';
import "./App.css" ;
import Header from "./Components/Header/Header";
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Quiz from './Components/Quiz/Quiz';



export default function App() {
  return (
    <>

<div className="app" style={{ backgroundImage: 'url("/ques1.png")'  }}>

<Header />

<Routes>

<Route path='/' element ={<Home />} />
< Route path="quiz" element={<Quiz />}  />

</Routes>

 </div>
<Footer />


    </>
  )
}

