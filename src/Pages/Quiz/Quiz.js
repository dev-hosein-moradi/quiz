import { CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import Questions from "../../components/Questions/Questions";
import "../Quiz/Quiz.css";

function Quiz({ name, questions, setQuestions, score, setScore }) {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);
  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
  }, [questions, currQues]);
  function handleShuffle(options) {
    return options.sort(() => Math.random() - 0.5);
  }
  return (
    <div className="quiz">
      <span className="subtitle">Welcome, {name}</span>
      {questions ? (
        <>
          <div className="quiz-info">
            <span>{questions[currQues].category}</span>
            <span>Your Score: {score}</span>
          </div>
          <Questions
            currQues={currQues}
            setCurrQues={setCurrQues}
            options={options}
            questions={questions}
            correct={questions[currQues]?.correct_answer}
            score={score}
            setScore={setScore}
          />
        </>
      ) : (
        <CircularProgress
          className="circleLoader"
          color="inherit"
          size={150}
          thickness={1}
        />
      )}
    </div>
  );
}
export default Quiz;
