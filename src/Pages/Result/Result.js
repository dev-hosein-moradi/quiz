import { Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../Result/Result.css";

function Result({ name, score, setScore }) {
  const history = useHistory();
  useEffect(() => {
    if (!name) {
      history.push("/");
    }
  }, [name, history]);
  function handleClick() {
    history.push("/");
    setScore(0);
  }
  return (
    <div className="result">
      <div className="result-info">
        <h1 className="first-title">Congratulations</h1>
        <img
          src="https://img.icons8.com/bubbles/80/000000/prize.png"
          style={{ marginBottom: 20 }}
        />
        <h1>Final Score : {score}</h1>
        <Button
          variant="contained"
          size="large"
          style={{
            alignSelf: "center",
            marginTop: 20,
            backgroundColor: "#f0836a",
          }}
          onClick={handleClick}
        >
          Go To Home
        </Button>
      </div>
      <img
        src="/winners-animate.svg"
        alt="winner img"
        className="result-banner"
      ></img>
    </div>
  );
}
export default Result;
