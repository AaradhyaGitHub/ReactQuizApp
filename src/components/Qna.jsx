import { styled } from "styled-components";

import { QNA } from "../data.js";
import { useState, useEffect } from "react";

const TestArea = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px; /* Space between elements */
  height: 60vh;
  width: 100%;
  background: linear-gradient(to right, #ff00ff76, #aa00ff2f);
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.336);
  padding: 10px;
`;

const QuestionContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 5px;
  border-radius: 15px;
  text-align: center;
  width: 100%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;
`;

const QuestionText = styled.h1`
  font-size: 1.8rem;
  color: #ffffff;
  font-weight: bold;
`;

const AnswerList = styled.ul`
  list-style: none;
  padding: 0px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

const AnswerButton = styled.button`
  width: 100%;
  padding: 20px;
  font-size: 1.2rem;
  font-weight: bold;
  background: linear-gradient(to right, #ff00ff, #ff0099);
  border: none;
  border-radius: 90px;
  color: #fcfcfc;
  cursor: pointer;
  transition: transform 0.2s, background 0.3s;

  &:hover {
    background: linear-gradient(to right, #ff0099, #ff0077);
    transform: scale(1.05);
  }
`;
const StartButton = styled.button`
  margin-top: 20%;
  width: 40%;
  padding: 30px;
  font-size: 5rem;
  font-weight: bold;
  background: linear-gradient(to right, #ea35a2, #e80be5);
  border: none;
  border-radius: 50px;
  color: #8de3e0;
  cursor: pointer;
  transition: transform 0.2s, background 0.3s;

  &:hover {
    background: linear-gradient(to right, #ff0099, #ff0077);
    transform: scale(1.05);
  }
`;

export default function QnA() {
  const [currentQuestion, setCurrentQuestion] = useState();
  const [hasExamStarted, setHasExamStarted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState([]);

  const startExam = () => {
    setHasExamStarted(true);
    setCurrentQuestion(0);
  };

  const currentQuestionIndex = QNA[currentQuestion];

  const answerSelected = (option) => {
    setSelectedAnswer((prevSelectedAnswer) => [...prevSelectedAnswer, option]); // Update selected answer
    verifyAnswer(option);
    setCurrentQuestion((prevQuestion) => prevQuestion + 1); // Move to next question
  };

  const verifyAnswer = (userOption) => {
    if (currentQuestionIndex.answer === userOption) {
      console.log("got it");
    } else {
      console.log("miss");
    }
  };

  // This effect will run when the selectedAnswer changes
  useEffect(() => {
    if (selectedAnswer) {
      // Perform any logic here with the updated selectedAnswer
      console.log("Updated selected answer: ", selectedAnswer);
    }
  }, [selectedAnswer]);

  return (
    <TestArea>
      {!hasExamStarted ? (
        <StartButton onClick={startExam}>Start</StartButton>
      ) : (
        <>
          <QuestionContainer>
            <QuestionText>
              <code>{currentQuestionIndex.question}</code>
            </QuestionText>
          </QuestionContainer>
          <AnswerList>
            {currentQuestionIndex.options.map((option, index) => (
              <li key={index}>
                <AnswerButton onClick={() => answerSelected(option)}>
                  {option}
                </AnswerButton>
              </li>
            ))}
          </AnswerList>
        </>
      )}
    </TestArea>
  );
}
