import { Button } from "@material-ui/core";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Result.css";

const Result = ({ name, score }) => {
  const Navigate = useNavigate();

  useEffect(() => {
    if (name) {
        Navigate.push("/");
    }
  }, [name, Navigate]);

  return (
    <div className="result">
      {/* <span className="title">Final Score : {score}</span> */}
      <span className="title">النتيجة النهائية: {score}</span>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        {/* Go to homepage */}
        ارجع الى الصفحة الرئيسية
      </Button>
    </div>




  );
};

export default Result;


