import styled from "styled-components";
import Count from "./Count.jsx";
import Hint from "./Hint.jsx";
import header_logo from "../../assets/quiz-logo.png";

// Styled Components
const HeaderContainer = styled.header`
  background-color: red;
  width: 100%;
  height: 12%;
  padding: 10px;
`;

const TopSection = styled.div`
background-color: blue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const LogoContainer = styled.div`
background-color: purple;
  display: flex;
  align-items: center;
  gap: 10px; /* Adjusts spacing between logo and text */
`;

const Logo = styled.img`
background-color: pink;
  height: 50px; /* Adjust as needed */
`;

export default function Header() {
  return (
    <HeaderContainer>
      <TopSection>
        <Count />

        <LogoContainer>
          <Logo src={header_logo} alt="clipboard" />
          <h1>React Quiz App</h1>
        </LogoContainer>

        <Hint />
      </TopSection>
    </HeaderContainer>
  );
}
