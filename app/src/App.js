import React from 'react'
import {Route, Routes,} from 'react-router-dom';
import "./App.css" ;
import Header from "./Components/Header/Header";
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Quiz from './Components/Quiz/Quiz';
import Add from './Components/Add/Add';
// import Typed from "react-typed";

import { useState } from "react";
import Result from './Components/Result/Result';
import Start from './Components/Start/Start';




export default function App() {

  const [category , setCategory] = useState('');
  const [difficulty , setDifficulty] = useState('');
  const [name , setName] = useState('');


  function Select_Data_From_Home_Comp (username,category,difficulty){
    setCategory(category) ; 
    setDifficulty(difficulty) ;
    setName(username) ;
    
  }

  return (
    <>
  
{/* <div className="app" style={{ backgroundImage: 'url("/ques1.png")'  }}> */}
<div className="app" style={{   }}>


{/* <Quiz startCount = '10' /> */}

<Header />



<Routes>

<Route path='/' element ={<Home Select_Data_From_Home_Comp={Select_Data_From_Home_Comp}/>} />
<Route path="quiz" element={<Quiz  name={name} category={category} difficulty={difficulty} startCount = '100' />}  />
<Route path='Add' element={<Add />} /> 
<Route path = "Result" element={< Result />} />
<Route path = "Start" element={<Start />} />

</Routes>

 </div>

<Footer />



    </>
  )
}

