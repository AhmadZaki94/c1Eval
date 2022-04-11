import { useState } from 'react'
import logo from './logo.svg'
import './App.css'


function App() {

  const [score, setScore] = useState(76);
  const [wicket, setWicket] = useState(2);
  const [ball, setBall] = useState(50);

  const handleScore = (value) => {
    setScore(score + value);
  }

  const handleWicket = (value) => {
    setWicket(wicket + value);
  }

  // const handleBall = (value) => {
  //   setBall(ball + value);
  // }


  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{" "}
          <h1 className="scoreCount">
            {
              // show "score" here
              score
            }
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {
              // show wicket here
              wicket
            }
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
              ball
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={() => {
          if(score <= 100)
          {
            handleScore(1);
          }
        }}>Add 1</button>
        <button className="addScore4" onClick={() => {
          if(score <= 100)
          {
            handleScore(4);
          }
        }}>Add 4</button>
        <button className="addScore6" onClick={() => {
          if(score <= 100)
          {
            handleScore(6);
          }
        }}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={() => {
          if(score <= 100)
          {
            if(wicket <= 11)
            {
              handleWicket(1);
            }
          }
        }}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={() => {
          if(score <= 100)
          {
            let count = ball + 0.1;
            if(count < (ball + 0.6))
            {
              setBall(count);
            }
          }
        }}>Add 1</button>
      </div>

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
      <h1 className='status'>{score > 100 ? "India Won": ""}</h1>
    </div>
  );
}

export default App;
