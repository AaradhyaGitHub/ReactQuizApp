import styled from "styled-components";
import header_logo from "../../assets/quiz-logo.png";

// Styled Components
const HeaderContainer = styled.header`
  width: 100%;
  height: 15%;
  padding: 10px;
`;

const TopSection = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px; /* Adjusts spacing between logo and text */
`;

const Logo = styled.img`
  height: 50px; /* Adjust as needed */
`;

export default function Header() {
  return (
    <HeaderContainer>
      <TopSection>

        <LogoContainer>
          <Logo src={header_logo} alt="clipboard" />
          <h1>React Quiz App</h1>
        </LogoContainer>

      </TopSection>
    </HeaderContainer>
  );
}
