import React, { useState } from "react";
import "./index.css";
import CircleGroup from "./CircleGroup";
import styled from "styled-components";

const StyledRectangleContainer = styled.div`
  border: 1px solid black;
  display: inline-block;
  background-color: black;
  border-radius: 30px;
`;

function App() {
  const [signalArr, setSignal] = useState([
    {
      id: 1,
      color: "red",
      isActive: true
    },
    {
      id: 2,
      color: "yellow",
      isActive: false
    },
    {
      id: 3,
      color: "green",
      isActive: false
    }
  ]);
  const activateSignal = color => {
    const newSignal = signalArr.map(signal => {
      if (signal.color === color) {
        signal.isActive = true;
      } else {
        signal.isActive = false;
      }
      return signal;
    });
    setSignal(newSignal);
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}> Traffic System</h1>
      <StyledRectangleContainer>
        <CircleGroup signalArr={signalArr} activateSignal={activateSignal} />
      </StyledRectangleContainer>
    </div>
  );
}

export default App;
