import { Button } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "../Questions/Questions.css";
import RoadMap from "../RoadMap/RoadMap";

function Questions({
  currQues,
  setCurrQues,
  options,
  questions,
  correct,
  score,
  setScore,
}) {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);
  function handleSelected(i) {
    if (selected === i && selected === correct) {
      return "select";
    } else if (selected === i && selected !== correct) {
      return "wrong";
    } else if (i === correct) {
      return "select";
    }
  }
  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) setScore(score + 1);
    setError(false);
  };
  function handleNext() {
    if (currQues > 8) {
      history.push("/result");
    } else if (selected) {
      setCurrQues(currQues + 1);
      setSelected();
    } else {
      setError("ERROR : Please Select on Option First");
    }
  }
  const history = useHistory();
  function handleQuit() {
    history.push("/");
  }
  return (
    <div className="questions">
      <RoadMap correct={correct} selected={selected} />
      <div className="ques-feild">
        <h2>{questions[currQues].question}</h2>
        <div className="options">
          {error && (
            <div className="errorMassage">
              <p>{error}</p>
            </div>
          )}
          {options &&
            options.map((i) => (
              <button
                key={i}
                disabled={selected}
                className={`singleoption ${selected && handleSelected(i)}`}
                onClick={() => handleCheck(i)}
              >
                {i}
              </button>
            ))}
        </div>
        <div className="controls">
          <Button onClick={handleQuit}>Quit</Button>
          <Button onClick={handleNext}>Next Question</Button>
        </div>
      </div>
    </div>
  );
}
export default Questions;
