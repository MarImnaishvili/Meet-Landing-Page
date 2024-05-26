import styled from "styled-components";
import userPicMob from "/assets/tablet/image-hero.png";
import userPicLeft from "/assets/desktop/image-hero-left.png";
import userPicRight from "/assets/desktop/image-hero-right.png";
import {
  MainHeader,
  Paragraph,
  BigBTN,
  SmallBTN,
} from "./styleComponents/GeneralStyles";

function FirstSection() {
  return (
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
          Meet makes it easy to connect with others face-to-face virtually and
          collaborate across any device.
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
  );
}

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
const TwoBTN = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 2rem;
  }
`;

export default FirstSection;
