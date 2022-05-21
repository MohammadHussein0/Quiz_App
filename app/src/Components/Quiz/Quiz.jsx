import React, { Component } from 'react';
import { QuizData } from './../../QuizData ';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Quiz.css" ;




export default class Quiz extends Component {

  state = {
    userAnswer:0,    //current users answer
    currentIndex:0,  //current questions index      
    quizEnd: false, //True if it's the last question
    score: 0, //the Score
    disabled: true,
    category:'',
    difficulty:'',
    name:'',
    AllQuestions:[],
    FilterdQuestions :[{question:'' , answer:'',options:[]}],
    isLoding:false,
    SelectionResult :false ,
    count: 1  
    
  }

  
//Load the quiz once the component mounts
componentDidMount(){
  const{name,category,difficulty}=this.props;
  const {startCount} = this.props

  let AllQuestions =QuizData ; 
  this.setState({
    name:name,
    category:category , 
    difficulty:difficulty,
    AllQuestions:AllQuestions,
    isLoding:true ,
    count: startCount
  });

   this.filterdQuestions(AllQuestions , category , difficulty);
   

   this.doIntervalChange()

}



doIntervalChange = () => {
  this.myInterval = setInterval(() => {
  this.setState(prevState => ({
    count: prevState.count - 1
  }))
}, 1000)
} 


componentWillUnmount () {
  clearInterval(this.myInterval)
}

  //Update the component
  componentDidUpdate(prevProps, prevState){
    const{name,category,difficulty}=this.props;
    let AllQuestions =QuizData ; 
    if(this.state.userAnswer !== prevState.userAnswer){
    this.setState({
      name:name,
      category:category , 
      difficulty:difficulty,
      AllQuestions:AllQuestions,
      isLoding:true
    });
    console.log(' done');
    }


  }

  //filterd The Questions 
  filterdQuestions = (AllQuestions ,category ,difficulty )=>{

    let b = AllQuestions.filter(Q =>{
      return Q.category === category && Q.difficulty=== difficulty;
    });
    
      this.setState({
    
      FilterdQuestions:b
    
      })
    }

    //to next question 
    next_Question = () => {
      const {currentIndex}=this.state ;

      this.setState({
          currentIndex: currentIndex + 1    


      });

      if(currentIndex === ''){
        alert('Plz select option')
      }

      this.changingScore();

    }


    //Check the answer

    checkAnswer = (userAnswer ,answer) => {
      if(userAnswer === answer ){
        this.setState({
          userAnswer:userAnswer,
          SelectionResult:true ,
          disabled:false
       
        })
    }
    else{
      this.setState({
        userAnswer:userAnswer,
        SelectionResult:false ,
        disabled:false
      })
    }
    


    }



    // changing the Score
    changingScore=()=>{
      const {score ,SelectionResult}=this.state ; 
      if(SelectionResult){
        this.setState({score: score + 1}) 
      }
    }



    // Responds to the click of the finish button
    finish =() => {
          this.changingScore();
          if(this.state.currentIndex === this.state.FilterdQuestions.length -1){
            this.setState({
              quizEnd:true
            })
          }      
      }



    // print your grade   
    printTheResult=()=>{
        alert('Your Grade is '+ this.state.score );

    }

    render() {
      
      const {currentIndex ,score ,userAnswer,FilterdQuestions,name, category , difficulty}=this.state ;
      const {question , options ,answer }=FilterdQuestions[currentIndex];
      const {count} = this.state
    return (
      <>

      <div className="quiz">
      <span className="subtitle">اهلا زميل {name} </span> 

      <div className="container">

<div className="timer" >

  <h3 className='timer-quiz'>Timer : {count}  </h3>

  {/* <h3>01:00</h3> */}


  </div>

      <h2>{question}</h2>
      <div className="box">
  

        <span>{`Question No : ${currentIndex +1 } of ${this.filterdQuestions.length} `}</span>
        {/* <span className='quizInfo' > اسم المادة :{QuizData[currentIndex].category} */}
        <span className='quizInfo' > اسم المادة : {category}
        
        <br />
        <br />
         {difficulty} :  مستوى السؤال 
             {/* {QuizData[currentIndex].difficulty}: مستوى السؤال  */}
        </span>
             <span  className='quiz-score' > Score : {score} % </span>   

        {
            options.map(option=>
                <p key={Math.random()}  className={` options ${userAnswer === option?"selected" : 0}`} 

                onClick ={()=>this.checkAnswer(option ,answer) }
                >
                    {option}

                </p>
                )
       }



       {
         currentIndex < FilterdQuestions.length -1 &&
        
         <button style={{
          borderRadius: 10,
         }} disabled={this.state.disabled} onClick={this.next_Question}>
            السؤال التالي  <i class="fas fa-angle-double-right"></i>
         </button>
        }

        { 
        (currentIndex === FilterdQuestions.length -1)?
        (!this.state.quizEnd)
        ?
        <button disabled={this.disabled} onClick= {this.finish}       >
            انهاء الامتحان
        </button>
        :
         <Link to="/" className="btn btn-primary" disabled={this.disabled} onClick={this.printTheResult}>The Result </Link>
        :''
        }

        </div>

        </div>
     
   </div>
      </>
    )
  }
}
