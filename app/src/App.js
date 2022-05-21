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
  
  
  // function Select_Data_From_Add_Comp ( question ,category,difficulty , option1 , option2 , option3 , option4 , currectAnswer){
  //   setCategory(category) ; 
  //   setDifficulty(difficulty) ;
  //   setQuestion(question) ;
  //   setOption1(option1) ;
  //   setOption2(option2) ;
  //   setOption3(option3) ;
  //   setOption4(option4) ;
  //   setCurrectAnswer(currectAnswer) ;
  // }


  return (
    <>
  
<div className="app" style={{ backgroundImage: 'url("/ques1.png")'  }}>


{/* <Quiz startCount = '10' /> */}

<Header />

<Routes>

<Route path='/' element ={<Home Select_Data_From_Home_Comp={Select_Data_From_Home_Comp}/>} />
<Route path="quiz" element={<Quiz  name={name} category={category} difficulty={difficulty} startCount = '60' />}  />
<Route path='Add' element={<Add />} /> 
<Route path = "Result" element={< Result />} />
<Route path = "Start" element={<Start />} />

</Routes>

 </div>

<Footer />




    </>
  )
}

