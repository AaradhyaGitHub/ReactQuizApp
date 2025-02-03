import { useEffect, useState } from "react";
import { styled } from "styled-components";

const ProgressBar = styled.progress`
  width: 100%;
  height: 20px;
  border-radius: 5px;
  overflow: hidden;
  appearance: none;

  &::-webkit-progress-bar {
    background-color: #e0e0e0;
    border-radius: 5px;
  }

  &::-webkit-progress-value {
    background-color: #6200ea;
    border-radius: 5px;
  }

  &::-moz-progress-bar {
    background-color: #ff0000;
    border-radius: 5px;
  }
`;

export default function Timer({timer} ) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prevTime - 10;
      });
    }, 10);

    return () => clearInterval(interval);
  }, [timer]); // Depend on `timer` to restart if needed

  return <ProgressBar value={remainingTime} max={timer} />;
}
