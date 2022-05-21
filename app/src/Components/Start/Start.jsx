import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./Start.css"
// import { Navigate } from 'react-router-dom';

const Start = () => {
    
const Navigate = useNavigate();

    const restart = ()=>{
    
          let path= "/quiz";
             Navigate(path);
        }
        
        const quit = ()=>{
            let path ="/" ; 
            Navigate(path) ; 
        }


    return (
        <>
    {/* Info Box  */}
   <div className="info_box">
  <div className="info-title"><span>بعض قواعد هذا الاختبار </span></div>
  <div className="info-list">
    <div className="info">1. بمجرد تحديد إجابتك ، لا يمكن التراجع عنها</div>
    <div className="info">2. لا يمكنك تحديد أي خيار بمجرد انتهاء الوقت (اذا اخترت التايمر)</div>
    <div className="info">3. للخروج من الاختبار اضغط على (كلية الاعمال) </div>
    <div className="info">4. ستحصل على نقاط بناءً على إجاباتك الصحيحة </div>
  </div>
  <div className="buttons">
    <button onClick={quit} className="quit">خروج</button>
    <button onClick={restart}  className="restart">متابعة</button>
  </div>
</div>

    
    </>
  )
}

export default Start