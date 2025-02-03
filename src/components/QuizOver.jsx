import { styled } from "styled-components";
import { QNA } from "../data.js";

const ResultArea = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 120%;
  width: 100%;
  background: linear-gradient(to right, #e112e176, #8406c32e);
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.336);
`;

const H1 = styled.h1`
  font-family: "Roboto Condensed", sans-serif;
  font-weight: bold;
  font-size: 2.5rem;
  letter-spacing: 0.6rem;
  margin: 0;
  text-transform: uppercase;
  background: linear-gradient(90deg, #e781fb 40%, #8e76fa 60%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const H2 = styled.h2`
  margin: 0;
  font-size: 1rem;
  color: #b496ec;
  text-transform: uppercase;
`;

export default function QuizOver({ children }) {
  return (
    <>
      {
        Ma
      }
      {children}
    </>
  );
}
