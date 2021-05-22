import { useState } from "react";
import GlobalStyle from "./theme/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { Cards } from "./components/Cards";
import { Footer } from "./components/Footer";
import styled, { keyframes } from "styled-components";
import { Logo } from "./components/Logo";
import { Modal } from "./components/Modal";
import { Circle } from "./components/Circle";
import { Dot } from "./components/Dot";
// import { Circlee } from "./components/Circlee";

const Planet = styled.img`
  width: 26.041667vw;
  height: 48.4375vh;
  /* background: url("/assets/moon.png"); */
  position: relative;
`;

const Wrapper = styled.section`
  width: 26.041667vw;
  height: 57.8125vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  left: 57.638889vw;
  top: 21.354167vh;
`;

const flyAnimationRocket = keyframes`
 { 0%  {top: -16.216216%};
  50% {top: -150%};
  100% {top: -16.216216%};}
`;

const Rocket = styled.img`
  width: 7.083333vw;
  height: 18.229167vh;
  position: absolute;
  left: 36%;
  top: -16.216216%;
  z-index: 2;
  animation-duration: 4s;
  animation-name: ${(props) => (props.active ? flyAnimationRocket : "")};
  animation-fill-mode: both;
  /* border: 1px solid red; */
`;

const Smoke1 = styled.img`
  width: 3.611111vw;
  height: 6.510417vh;
  /* background: url("/assets/smoke1.png"); */
  position: absolute;
  left: 58.666667%;
  top: 5.18018%;
`;

const Smoke2 = styled.img`
  width: 4.513889vw;
  height: 8.072917vh;
  /* background: url("/assets/smoke2.png"); */
  position: absolute;
  top: 2.252252%;
  left: 23.2%;
`;

const flyAnimationGear = keyframes`
{0%  {top: 11.261261%};
50% {top: -150%};
100% {top: 11.261261%};}

`;

const LandingGear = styled.img`
  width: 4.722222vw;
  height: 2.994792vh;
  position: absolute;
  left: 40.533333%;
  top: 11.261261%;
  animation-duration: 4s;
  animation-name: ${(props) => (props.active ? flyAnimationGear : "")};
  animation-fill-mode: both;
`;

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const Button = styled.button`
  width: 12.777778vw;
  height: 6.25vh;
  border-radius: 8px;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.H300};
  font-weight: ${({ theme }) => theme.fontWeight.H300};
  color: white;
  background: rgba(120, 96, 215, 1);
  transition: all 0.3s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.colors.secondaryBtn};
  }
`;

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [type, setType] = useState("capsules");
  const [activeAnimation, setActiveAnimation] = useState(false);

  const handleModalVisibility = () => {
    setModalOpen((prevState) => !prevState);
  };

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Container>
          {isModalOpen && <Modal close={handleModalVisibility} type={type} />}
          <Logo />
          <Cards modalVisibility={handleModalVisibility} setType={setType} />
          <Wrapper>
            <Planet src="/assets/moon.svg" alt="moon" />
            <Rocket
              active={activeAnimation}
              src="/assets/rocket.svg"
              alt="rocket"
            />
            <Smoke1 src="/assets/smoke1.svg" alt="smoke" />
            <Smoke2 src="/assets/smoke2.svg" alt="smoke" />
            <LandingGear
              src="/assets/landingGear.svg"
              alt="landing gear"
              active={activeAnimation}
            />
            {/* </Planet> */}
            <Button
              onClick={() => {
                setActiveAnimation(true);
                // setTimeout(() => setActiveAnimation(false), 4000);
              }}
            >
              Lanuch Rocket!
            </Button>
          </Wrapper>
          <Circle top={14.0625} left={86.319444} right={0} />
          <Circle top={-26.822917} left={33.611111} right={0} />
          <Circle top={41.927083} left={-12.291667} right={0} />
          <Dot top={18.75} left={5.625} right={0} color="#E34A67" />
          <Dot top={84.895833} left={45.833333} right={0} color="#7860D7" />
          <Dot top={10.9375} left={60.763889} right={0} color="#00C9B7" />
          <Dot top={71.875} left={87.430556} right={0} color="#E34A67" />
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
