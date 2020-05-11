import React from "react";
import Circle from "./Circle";

function CircleGroup(props) {
  const { signalArr, activateSignal } = props;
  return signalArr.map(signal => {
    return (
      <Circle
        key={signal.id}
        color={signal.color}
        isActive={signal.isActive}
        activateSignal={activateSignal}
      />
    );
  });
}

export default CircleGroup;
