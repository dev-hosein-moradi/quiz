import React, { useState } from "react";
import "../Home/Home.css";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Categories from "../../Data/Categories";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";
import ErrorMassage from "../../components/ErrorMassage/ErrorMassage";

function Home({ name, setName, fetchQuestions }) {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulity] = useState("");
  const [error, setError] = useState(false);

  const history = useHistory();

  function handleSubmit() {
    if (!name || !category || !difficulty) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      history.push("/quiz");
    }
  }
  return (
    <div className="home">
      <div className="setting">
        <h2>Quiz Settings</h2>
        <div className="setting-select">
          {error && <ErrorMassage />}

          <TextField
            style={{ marginBottom: 25 }}
            id="outlined-basic"
            label="Enter Your Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
            autoComplete="off"
          />
          <TextField
            id="category"
            style={{ marginBottom: 30 }}
            select
            label="Select Category"
            variant="outlined"
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            value={category}
          >
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="difficalty"
            select
            label="Select Difficulty"
            variant="outlined"
            style={{ marginBottom: 30 }}
            onChange={(e) => {
              setDifficulity(e.target.value);
            }}
            value={difficulty}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>
          <Button
            style={{ backgroundColor: "#f0836a" }}
            variant="contained"
            size="large"
            onClick={handleSubmit}
          >
            Start Quiz
          </Button>
        </div>
      </div>

      <img src="/test.svg" alt="online-test" className="banner"></img>
    </div>
  );
}
export default Home;
