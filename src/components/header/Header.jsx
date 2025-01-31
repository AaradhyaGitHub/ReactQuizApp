import styled from "styled-components";
import Count from "./Count.jsx";
import Hint from "./Hint.jsx";
import header_logo from "../../assets/quiz-logo.png";

// Styled Components
const HeaderContainer = styled.header`
    width: 100%;
    padding: 10px;
`;

const TopSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative; /* Needed for absolute centering of the logo */
    width: 100%;
`;

const Logo = styled.img`
    width: 50px;
    height: auto;
    position: absolute;
    left: 50%;
    transform: translateX(-50%); /* Centers it horizontally */
`;



export default function Header() {
    return (
        <HeaderContainer>
            <TopSection>
                <Count />
                
                <Logo src={header_logo} alt="champion cup logo" />
                
                <Hint />
            </TopSection>
        </HeaderContainer>
    );
}

