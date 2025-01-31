import Header from "./header/Header.jsx";
import Timer from "./Timer.jsx";
import QnA from "./Qna.jsx";
import styled from "styled-components";


const DashSection = styled.section`
  gap: 20px;
  display: flex;
  justify-content: space-between; /* Space between the two panels */
  height: 65vh;
  width: 70%;
  background: linear-gradient(to right, #c21ad8c6, #aa00ff5c);
  border-radius: 20px; /* Smooth rounded corners */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  padding: 20px; /* Add spacing inside */
  margin: 20px auto; /* Center horizontally with margin */

  h1 {
    font-weight: bold;
    font-size: 25px; /* Adjust font size */
    color: #000000; /* Text color */
    text-align: left; /* Center the heading */
    margin-bottom: 10px; /* Space below the heading */
  }

  hr {
    border: none; /* Remove default border style */
    height: 2px; /* Thickness of the line */
    background-color: #0000007c; /* Line color */
    margin-bottom: 10px; /* Center the line horizontally */
  }
`;

export default function Dash() {
  return (
    <DashSection>
      <Header />
      <Timer />
      <QnA />
    </DashSection>
  );
}
