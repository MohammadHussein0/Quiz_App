
import  axios from 'axios';
import React, { useState } from 'react'
import joi from 'joi';
import {  MenuItem, TextField } from "@material-ui/core";
import "./Add.css"
import Categories from "../../Data/json";


export default function Add() {



let [user,setUser]= useState ({
  question:'',
  answer1:'',
  answer2:'',
  answer3:'',
  // answer4:'',
})



let [errorList,setErrorLise] = useState([])


  async function SubmitFormDate(e){
e.preventDefault();
let ValidateReuslt = ValedationFrom()

if(ValidateReuslt.error){

setErrorLise(ValidateReuslt.error.details)

// alert(ValidateReuslt.error.details)

}else{
  let {data} = await axios.post('',user)
  alert('done')
  // console.log(ValidateReuslt);
}



  }

function getFormDate(e){

let Myuser = {...user};
Myuser[e.target.name]=e.target.value;
setUser(Myuser)
// console.log(Myuser)

  }


  const  ValedationFrom =()=>{

    const schema = joi.object({

      question:joi.string().required().min(2).max(60).alphanum(),
      answer1:joi.string().required().min(2).max(60).alphanum(),
      answer2:joi.string().required().min(2).max(60).alphanum(),
      answer3:joi.string().required().min(2).max(60).alphanum(),
      // answer4:joi.string().required().min(2).max(60).alphanum(),
    
    });
    
    return schema.validate(user,{abortEarly:false})
    }


  return (
    <>
<div className="container">

<div className="mt-5">

<h1 className='my-5 text-center text-danger' > Add Question to DataBase  <i class="fas fa-database"></i> </h1>

{errorList.map( (error,index)=>
<div  key={index} className=" alert alert-danger">{error.message}</div>
)

}
   <form onSubmit={SubmitFormDate}>



   <div className="content">
   <div className="settings">
        <div className="settings__select">


          <TextField
            select
            label="اختر مادة"
            // value={category}
            // onChange={(e) => setCategory(e.target.value)}
            variant="outlined"
          style={{ marginBottom: 30 }}
        >
          {Categories.map((cat) => (
            <MenuItem key={cat.value} value={cat.category}>
              {cat.category}
            </MenuItem>
          ))}
        </TextField>
        <TextField
            select
            label="صعوبة السؤال "
            variant="outlined"
            // value={difficulty}
            // onChange={(e) => setDifficulty(e.target.value)}
            style={{ marginBottom: 30 }}
          >
            <MenuItem key="Easy" value="easy">
              سهل
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              متوسط 
            </MenuItem>
            <MenuItem key="Hard" value="hard">
             صعب 
           </MenuItem>
         </TextField>
   

</div>
</div>
</div>






   <div className="mb-3">
    <label htmlFor="question" className="form-label">السؤل</label>
    <input onChange={getFormDate} type="text" className="form-control" id="question" aria-describedby="emailHelp" name="question"/>
  </div>

  <div className="mb-3">
    <label htmlFor="answer1" className="form-label">الخيار رقم (1)</label>
    <input  onChange={getFormDate} type="text" className="form-control" id="answer1" aria-describedby="emailHelp" name="answer1" />
  </div>

  <div className="mb-3">
    <label htmlFor="answer2" className="form-label">الخيار رقم (2)</label>
    <input  onChange={getFormDate} type="test" className="form-control" id="answer2" aria-describedby="emailHelp" name='answer2' />
  </div>

  <div className="mb-3">
    <label htmlFor="answer3" className="form-label">الخيار رقم (3)</label>
    <input onChange={getFormDate} type="text" className="form-control" id="answer3" aria-describedby="emailHelp" name="answer3" />
  </div>

  {/* <div className="mb-3">
    <label htmlFor="answer4" className="form-label">الخيار رقم (4)</label>
    <input onChange={getFormDate} type="text" className="form-control" id="answer4" aria-describedby="emailHelp" name="answer4" />
  </div> */}

  <button type='submit'className="btn btn-primary float-end ">ارسال</button>
  
<div className="clrfi"></div>
</form>

</div>

</div>




    </>
  )
}

