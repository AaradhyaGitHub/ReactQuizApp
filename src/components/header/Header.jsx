import Count from "./Count.jsx"
import Hint from "./Hint.jsx"
import header_logo from "../../assets/quiz-logo.png"
export default function Header(){
    return (
        <>
            <Count />
            <img src = {header_logo} alt = "champion cup logo" />
            <Hint />
        </>
    )
}