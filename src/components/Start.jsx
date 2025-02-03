import {styled} from 'styled-components'
const StartButton = styled.button`
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

export default function Hint() {

  return (
    <>
      <div>
        <StartButton>
          <h1>Start</h1>
        </StartButton>
      </div>
    </>
  );
}
