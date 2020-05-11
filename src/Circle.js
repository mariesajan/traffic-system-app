import React from "react";
import styled from "styled-components";

const StyledCircle = styled.div`
  border: 1px solid white;
  height: 100px;
  width: 100px;
  margin: 10px;
  border-radius: 50%;
  background-color: ${props => (props.isActive ? props.color : "black")};
  cursor: pointer;
`;
function Circle(props) {
  const { color, isActive, activateSignal } = props;

  return (
    <StyledCircle
      isActive={isActive}
      color={color}
      onClick={e => activateSignal(color)}
    />
  );
}

export default Circle;
