import { useState } from "react";
import GlobalStyle from "./theme/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { Cards } from "./components/Cards";
import { Footer } from "./components/Footer";
import styled, { keyframes } from "styled-components";
import { Logo } from "./components/Logo";
import { Modal } from "./components/Modal";

const Planet = styled.section`
  width: 375px;
  height: 372px;
  background: url("/assets/moon.png");
  position: relative;
  /* border: 1px solid red; */
`;

const Wrapper = styled.section`
  width: 375px;
  height: 472px;
  /* border: 1px solid yellow; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const flyAnimation = keyframes`
0%  {top: -19%;}
50% {top: -100%}
100% {top: -19%}
`;

const Rocket = styled.div`
  width: 102px;
  height: 140px;
  background: url("/assets/rocket.png");
  position: absolute;
  left: 135px;
  bottom: 304px;
  z-index: 2;
  animation-duration: 4s;
  animation-name: ${(props) => (props.active ? flyAnimation : "")};
  animation-fill-mode: both;
`;

const Smoke1 = styled.div`
  width: 52px;
  height: 50px;
  background: url("/assets/smoke1.png");
  position: absolute;
  right: 103px;
  bottom: 299px;
`;

const Smoke2 = styled.div`
  width: 65px;
  height: 62px;
  background: url("/assets/smoke2.png");
  position: absolute;
  left: 87px;
  bottom: 300px;
`;

const LandingGear = styled.div`
  width: 68px;
  height: 23px;
  background: url("/assets/landingGear.png");
  position: absolute;
  left: 152px;
  bottom: 299px;
`;

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ContainerWrapper = styled.section`
  width: 1240px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  border: 1px solid yellow;
`;

const Button = styled.button`
  width: 184px;
  height: 48px;
  border-radius: 8px;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.H300};
  font-weight: ${({ theme }) => theme.fontWeight.H300};
  color: white;
  background: rgba(120, 96, 215, 1);
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
          <ContainerWrapper>
            <Logo />
            <Cards modalVisibility={handleModalVisibility} setType={setType} />
            <Wrapper>
              <Planet>
                <Rocket active={activeAnimation} />
                <Smoke1 />
                <Smoke2 />
                <LandingGear />
              </Planet>
              <Button
                onClick={() => {
                  setActiveAnimation(true);
                  setTimeout(() => setActiveAnimation(false), 4000);
                }}
              >
                Lanuch Rocket!
              </Button>
            </Wrapper>
          </ContainerWrapper>
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
