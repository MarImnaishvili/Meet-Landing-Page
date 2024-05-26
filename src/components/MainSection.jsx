import styled from "styled-components";
import womanInVideoCall from "/assets/desktop/image-woman-in-videocall.jpg";
import threeWoman from "/assets/desktop/image-women-videochatting.jpg";
import menInMeeting from "/assets/desktop/image-men-in-meeting.jpg";
import menTexting from "/assets/desktop/image-man-texting.jpg";
import { Paragraph, AnotherMainHeader } from "./styleComponents/GeneralStyles";

function MainSection() {
  return (
    <MainSectionDiv>
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
      <AnotherMainHeader>Smarter meetings, all in one place</AnotherMainHeader>
      <Paragraph>
        Send messages, share files, show your screen, and record your meetings —
        all in one workspace. Control who can join with invite-only team access,
        data encryption, and data export.
      </Paragraph>
      <Line></Line>
    </MainSectionDiv>
  );
}
const MainSectionDiv = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 2.4rem;
  text-align: center;
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
export default MainSection;
