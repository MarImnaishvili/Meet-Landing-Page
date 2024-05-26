import styled from "styled-components";
import logo from "/assets/logo.svg";
import FirstSection from "./components/FirstSection";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <MainContainer>
        <MainLogo>
          <img src={logo} alt="meet logo"></img>
        </MainLogo>
        <FirstSection />
        <MainSection />
        <Footer />
      </MainContainer>
    </>
  );
}
const MainContainer = styled.div`
  width: 37.5rem;
  @media (min-width: 768px) {
    width: 76.8rem;
  }
  @media (min-width: 1440px) {
    width: 144rem;
  }
`;
const MainLogo = styled.div`
  display: flex;
  justify-content: center;
  margin: 5rem;
`;

export default App;
