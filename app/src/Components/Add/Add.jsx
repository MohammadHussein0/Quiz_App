

import { Button, MenuItem, TextField } from "@material-ui/core";
import { useState } from "react";
import $ from "jquery" ;
import "./Add.css"
import Categories from "../../Data/json";
import ErrorMessage from './../ErrorMessage/ErrorMessage';


const Add = ({Select_Data_From_Add_Comp }) => {
  const [error, setError] = useState(false);
  const [ category , setCategory] = useState('');
  const [difficulty , setDifficulty] = useState('');
  const [question , setQuestion] = useState('');
  const [option1 , setOption1] = useState('');
  const [option2 , setOption2] = useState('');
  const [option3 , setOption3] = useState('');
  const [option4 , setOption4] = useState('');
  const [currectAnswer , setCurrectAnswer] = useState('');



  const Goto_BataBase = ()=>{
    
    if(!question || !category || !difficulty || !option1 || 
      !option2 || !option3 || !option4 || !currectAnswer  ){
      
        
    // setError(true);
    // return; 
       alert('Error')
    }else{
  

      // setError(false);
      // Select_Data_From_Add_Comp(question , category ,difficulty , option1
      //   ,option2 ,option3 ,option4  , currectAnswer );

alert('Thanks!')

    }
  }

  return (
    <>

    <div className="content">
      <div className="settings">
        <div className="settings__select">


        {error && <ErrorMessage> الرجاء إدخال المعلومات الخاصة بك </ErrorMessage>}


          <TextField
            select
            label="اختر مادة"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
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
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
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
   
        
<TextField
            style={{ marginBottom: 25 }}
            label=" أكتب سؤال"
            value={question}
            name ={question}
            onChange={(e) => setQuestion(e.target.value)}
            variant="outlined"
            size="large"

          />


<TextField
     
          variant="outlined"
          label="الجواب رقم (1)"
          value={option1}
            name ={option1}
            onChange={(e) => setOption1(e.target.value)}
          type="text"
          size="large"
          style={{marginTop:50}}
        />

<TextField
          // onChange={handleChange}
          variant="outlined"
          label="الجواب رقم (2)"
          value={option2}
          name ={option2}
          onChange={(e) => setOption2(e.target.value)}
          type="text"
          size="large"
          // style={{marginButton:30}}
        />

<TextField
          // onChange={handleChange}
          variant="outlined"
          label="الجواب رقم (3)"
          value={option3}
          name ={option3}
          onChange={(e) => setOption3(e.target.value)}
          type="text"
          size="large"
          // style={{margiTop:90}}
        />

<TextField
          // onChange={handleChange}
          variant="outlined"
          label="الجواب رقم (4)"
          value={option4}
          name ={option4}
          onChange={(e) => setOption4(e.target.value)}
          type="text"
          size="large"
          // style={{marginButton:30}}
        />

<TextField
          // onChange={handleChange}
          // variant="outlined"
          label="الجواب الصحيح"
          value={currectAnswer}
          name ={currectAnswer}
          onChange={(e) => setCurrectAnswer(e.target.value)}
          type="text"
          size="large"
          
          style={{marginTop:70 ,textAlign:"center"}}
        />

<Button 
            variant="contained"
            color="primary"
            size="large"
            onClick={Goto_BataBase}
            style={{ marginTop: 70 }}
          >
          ارسال

          </Button>         




        </div>



      </div>
 
    </div>


    </>
  );
  
};


export default Add;



