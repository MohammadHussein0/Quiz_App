import React, { Component } from 'react';
import { QuizData } from './../../QuizData ';

export default class Quiz extends Component {

  state = {
    userAnswer:0,    //current users answer
    currentIndex:0,  //current questions index
    options: [],       //the four options
    quizEnd: false, //True if it's the last question
    score: 0, //the Score
    disabled: true,
  }


//Component that holds the current quiz
loadQuiz = () => {
  const {currentIndex} = this.state //get the current index
  this.setState(() => {
      return {
        category:QuizData[currentIndex].question ,
          question: QuizData[currentIndex].question,
          options : QuizData[currentIndex].options,
          answer: QuizData[currentIndex].answer          
      }
  }
  )
}


//Handles Click event for the next button
next_Question = () => {
  const {userAnswer, answer , score } = this.state
  this.setState({
      currentIndex: this.state.currentIndex + 1
      

    })

      //Check for correct answer and increment score
  if(userAnswer ===answer ){
    this.setState({
        score: score + 1
    })
}
}


//Load the quiz once the component mounts
componentDidMount(){
  this.loadQuiz();
}


//Update the component
componentDidUpdate(prevProps, prevState){
    const{currentIndex} = this.state;
    if(this.state.currentIndex !== prevState.currentIndex){
        this.setState(() => {
            return {
                disabled: true,
                category: QuizData[currentIndex].question,
                question: QuizData[currentIndex].question,
                options : QuizData[currentIndex].options,
                answer: QuizData[currentIndex].answer         
                 
            }
          });
          
        }
      }


//Check the answer
checkAnswer = answer => {
  this.setState({
      userAnswer: answer,
      disabled:false
  })
}



// Responds to the click of the finish button
  finish =() => {
  if(this.state.currentIndex === QuizData.length -1){
      this.setState({
        quizEnd:true
      })
      alert('final question');

    }
    
  }


//   if(currentIndex == QuizData.lenght &&){
//     <h2>{question}</h2>
//   }

  
    render() {
      
      const {question , name , score , options , currentIndex , userAnswer , quizEnd } = this.state

    return (
      <>

<div className="quiz">
      <span className="subtitle">اهلا زميل, {name}</span> 

<div className="container">
  <div className="box">

      <h2>{question}</h2>

      
        <span>{`Question ${currentIndex +1 } of ${QuizData.length}`}</span>
        <span className='quizInfo' > اسم المادة :{QuizData[currentIndex].category}
                      {/* {QuizData[currentIndex].difficulty} */}

                  <span  className='quiz-score' >
                  Score : {score}
                    </span>   
                    </span>

        {
            options.map(option=>
                <p key={option.id} className={`options ${userAnswer === option?"selected" : 0}`} 

                onClick ={()=>this.checkAnswer(option) }
                >
                    {option}

                </p>
                )
        }


{currentIndex < QuizData.length -1 &&
        
        <button  disabled={this.state.disabled} onClick={this.next_Question}>
           السؤال التالي
        </button>

        }


            {currentIndex === QuizData.length -1 && 
        <button disabled={this.disabled} onClick= {this.finish}       >
            انهاء الامتحان
        </button>

            }

        </div>

        </div>
     
   </div>
      </>
    )
  }
}
