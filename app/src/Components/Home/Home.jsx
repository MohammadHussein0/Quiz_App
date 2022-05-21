import { Button, MenuItem, TextField } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Categories from "../../Data/json";
import "./Home.css";
import ErrorMessage from './../ErrorMessage/ErrorMessage';


const Home = ({Select_Data_From_Home_Comp}) => {
  const [category , setCategory] = useState('');
  const [difficulty , setDifficulty] = useState('');
  const [name , setName] = useState('');
  const [error, setError] = useState(false);
  

const Navigate = useNavigate();

const GoTo_Add =()=>{
  let path= "/Add";
     Navigate(path);
}


const Goto_quiz = () => {

  if(!name || !category || !difficulty){

    setError(true);
      return;

// alert('plz input your info')


  }else{
    setError(false);
    Select_Data_From_Home_Comp(name , category ,difficulty );

     let path= "/start";
     Navigate(path);

    }

  };


  return (
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 30 }}>  Business College Quiz </span>
        <div className="settings__select">

        {error && <ErrorMessage> الرجاء إدخال المعلومات الخاصة بك </ErrorMessage>}

          <TextField
            style={{ marginBottom: 25 }}
            label="اسم الطالب"
            value={name}
            name ={name}
            variant="outlined"
            onChange={(e) => setName(e.target.value)}

          />
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
            label="صعوبة الامتحان "
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            variant="outlined"
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

          {/* <FormControl fullWidth size="small"> */}
        <TextField
          // onChange={handleChange}
          variant="outlined"
          label="عدد الاسئلة"
          // value={number}
          type="number"
          size="small"
        />

<TextField
            select
            label="Timer"
            // value={difficulty}
            // onChange={(e) => setDifficulty(e.target.value)}
            variant="outlined"
            style={{ marginTop: 30 }}
          >
            <MenuItem key="Easy" value="easy">
             No Timer
            </MenuItem>
           
            <MenuItem key="Hard" value="hard">
              Timer
            </MenuItem>
          </TextField>

      {/* </FormControl> */}

          <Button 
            variant="contained"
            color="primary"
            size="large"
            onClick={Goto_quiz}
            style={{ marginTop: 70 }}
          >
            ابدا الامتحان

          </Button>           

        </div>

        {/* <div className="icons float-end">
        <i class="fas fa-plus-circle"></i>
      </div> */}

      <button onClick={GoTo_Add} type="submit" className="btnn">+</button>
      </div>
    </div>
  );
  
};


export default Home;


