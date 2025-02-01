import Header from "./header/Header.jsx";
import Timer from "./Timer.jsx";
import QnA from "./Qna.jsx";
import styled from "styled-components";

const DashSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centers content horizontally */
  gap: 10px; /* Space between elements */
  height: 78vh;
  width: 70%;
  background: linear-gradient(to right, #c21ad8c6, #aa00ff5c);
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px auto;
`;

export default function Dash() {
  return (
    <DashSection>
      <Header />
      <QnA />
    </DashSection>
  );
}
