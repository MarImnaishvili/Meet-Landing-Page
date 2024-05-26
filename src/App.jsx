import styled from "styled-components";
import logo from "./assets/logo.svg";
import userPicMob from "./assets/tablet/image-hero.png";
import userPicLeft from "./assets/desktop/image-hero-left.png";
import userPicRight from "./assets/desktop/image-hero-right.png";
import womanInVideoCall from "./assets/desktop/image-woman-in-videocall.jpg";
import threeWoman from "./assets/desktop/image-women-videochatting.jpg";
import menInMeeting from "./assets/desktop/image-men-in-meeting.jpg";
import menTexting from "./assets/desktop/image-man-texting.jpg";
import imgFooter from "./assets/mobile/image-footer.jpg";
import tabletFooterImg from "./assets/tablet/image-footer.jpg";
import DesktopFooterImg from "./assets/desktop/image-footer.jpg";

function App() {
  return (
    <>
      <MainContainer>
        <MainLogo>
          <img src={logo} alt="meet logo"></img>
        </MainLogo>
        <DivWrapper>
          <UserPics>
            <img className="userPicMob" src={userPicMob} alt="userPicMob"></img>
          </UserPics>
          <UserPicsSeparate>
            <img src={userPicLeft} alt="userPicLeft"></img>
          </UserPicsSeparate>
          <TextWrapper>
            <MainHeader>Group Chat for Everyone</MainHeader>
            <Paragraph>
              Meet makes it easy to connect with others face-to-face virtually
              and collaborate across any device.
            </Paragraph>
            <TwoBTN>
              <BigBTN>
                <div>
                  <p>Download</p>&ensp;
                  <span>v1.3</span>
                </div>
              </BigBTN>
              <SmallBTN>What is it?</SmallBTN>
            </TwoBTN>
          </TextWrapper>
          <UserPicsSeparate>
            <img src={userPicRight} alt="userPicRight"></img>
          </UserPicsSeparate>
        </DivWrapper>
        <MainSection>
          <Line></Line>
          <StageFirst>
            <span>01</span>
          </StageFirst>
          <PeopleChattingSection>
            <img src={womanInVideoCall} alt="womanInVideoCall"></img>
            <img src={threeWoman} alt="threeWoman"></img>
            <img src={menInMeeting} alt="menInMeeting"></img>
            <img src={menTexting} alt="menTexting"></img>
          </PeopleChattingSection>
          <UpperCaseHeader>Built for modern use</UpperCaseHeader>
          <AnotherMainHeader>
            Smarter meetings, all in one place
          </AnotherMainHeader>
          <Paragraph>
            Send messages, share files, show your screen, and record your
            meetings — all in one workspace. Control who can join with
            invite-only team access, data encryption, and data export.
          </Paragraph>
          <Line></Line>
          <Footer>
            <div>
              <span>02</span>
            </div>
            <img className="imgFooter" src={imgFooter} alt="imgFooter"></img>
            <img
              className="tabletFooterImg"
              src={tabletFooterImg}
              alt="tabletFooterImg"
            ></img>
            <img
              className="DesktopFooterImg"
              src={DesktopFooterImg}
              alt="DesktopFooterImg"
            ></img>

            <footer>
              <FooterHeader>Experience more together</FooterHeader>
              <FooterParag>
                Stay connected with reliable HD meetings and unlimited
                one-on-one and group video sessions.
              </FooterParag>
              <FooterBTN>
                <div>
                  <p>Download</p>&ensp;
                  <span>v1.3</span>
                </div>
              </FooterBTN>
            </footer>
          </Footer>
        </MainSection>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a> */}
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
const DivWrapper = styled.div`
  @media (min-width: 1440px) {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 5rem;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const UserPics = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  margin-bottom: 5rem;
  .userPicMob {
    width: 100%;
  }

  @media (min-width: 1440px) {
    display: none;
  }
`;

const UserPicsSeparate = styled.div`
  @media (max-width: 1440px) {
    display: none;
  }
`;
const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 2.4rem;
  text-align: center;
  @media (min-width: 1440px) {
    margin: 0;
  }
`;
const MainHeader = styled.h1`
  color: #28283d;
  font-weight: 900;
  font-size: 4rem;
  line-height: 4.4rem;
  margin-bottom: 5rem;
`;
const Paragraph = styled.p`
  color: #87879d;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 26px;
  text-align: center;
  margin-bottom: 5rem;
`;
const TwoBTN = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 2rem;
  }
`;
const BigBTN = styled.button`
  width: 193px;
  height: 58px;
  cursor: pointer;
  background-color: #4d96a9;
  border-radius: 4rem;
  color: #ffffff;
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
  font-weight: 900;
  cursor: pointer;
  div {
    display: flex;
    size: 1.6rem;
    line-height: 2.6rem;
    justify-content: space-around;
    p {
      color: #fff;
    }
    span {
      color: #8fe3f9;
    }
  }
  &:hover {
    background-color: #71c0d4;
  }
`;

const SmallBTN = styled(BigBTN)`
  width: 13.9rem;
  background-color: #855fb1;
  &:hover {
    background-color: #b18bdd;
  }
`;

const Line = styled.div`
  width: 0.1rem;
  height: 8.4rem;
  border: 0.1rem 0rem 0rem 0rem;
  background-color: #87879d40;
`;

const StageFirst = styled.div`
  width: 5.6rem;
  height: 5.6rem;
  border-radius: 50%;
  border: 0.1rem solid #87879d40;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #87879d;
  margin-bottom: 5rem;
  span {
    font-size: 1.6rem;
    font-weight: 900;
    line-height: 2.6rem;
  }
`;

const PeopleChattingSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  margin-bottom: 5rem;

  img {
    border-radius: 2rem;
    width: 15.1rem;
    height: 14.3rem;
    max-width: 100%;
    @media (min-width: 1440px) {
      width: 25.5rem;
      height: 24.2rem;
    }
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media (min-width: 1440px) {
    width: 111rem;
  }
`;

const UpperCaseHeader = styled.h2`
  color: #4d96a9;
  font-size: 1.6rem;
  font-weight: 900;
  line-height: 2.6rem;
  letter-spacing: 0.4rem;
  text-transform: uppercase;
  margin-bottom: 3rem;
`;

const AnotherMainHeader = styled(MainHeader)`
  font-size: 3.2rem;
  line-height: 3.6rem;
  margin-bottom: 3rem;
`;

const Footer = styled.div`
  margin-top: 2.8rem;
  position: relative;
  width: 100%;
  max-width: 100%;
  & > div {
    width: 5.6rem;
    height: 5.6rem;
    border-radius: 50%;
    border: 0.1rem solid #87879d40;
    background-color: #fafafa;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #87879d;
    margin-bottom: 5rem;
    position: absolute;
    right: 50%;
    top: -5.6rem;
    transform: translate(50%, 50%);
    z-index: 3;
    & > span {
      font-size: 1.6rem;
      font-weight: 900;
      line-height: 2.6rem;
    }
  }
  & > img {
    width: 100%;
  }
  .imgFooter {
    @media (min-width: 768px) {
      display: none;
    }
  }
  .tabletFooterImg {
    display: none;
    @media (min-width: 768px) {
      display: block;
    }
    @media (min-width: 1440px) {
      display: none;
    }
  }
  .DesktopFooterImg {
    display: none;
    @media (min-width: 1440px) {
      display: block;
    }
  }
  footer {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    background-color: #4d96a9;
    opacity: 0.9;
    z-index: 2;
    transform: translate(-50%, -50%);
    text-align: center;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const FooterHeader = styled(AnotherMainHeader)`
  margin-top: 5rem;
  color: #fafafa;
`;
const FooterParag = styled(Paragraph)`
  color: #fafafa;
`;

const FooterBTN = styled(BigBTN)`
  margin-bottom: 0;
  background-color: #855fb1;

  & > p {
    color: #fff;
  }
  & > span {
    color: #d9b8ff;
  }
  &:hover {
    background-color: #b18bdd;
  }
`;
export default App;
