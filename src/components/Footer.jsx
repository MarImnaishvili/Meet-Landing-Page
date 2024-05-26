import styled from "styled-components";
import imgFooter from "/assets/mobile/image-footer.jpg";
import tabletFooterImg from "/assets/tablet/image-footer.jpg";
import DesktopFooterImg from "/assets/desktop/image-footer.jpg";
import { Paragraph, BigBTN, MainHeader } from "./styleComponents/GeneralStyles";

function Footer() {
  return (
    <FooterDiv>
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
          Stay connected with reliable HD meetings and unlimited one-on-one and
          group video sessions.
        </FooterParag>
        <FooterBTN>
          <div>
            <p>Download</p>&ensp;
            <span>v1.3</span>
          </div>
        </FooterBTN>
      </footer>
    </FooterDiv>
  );
}

const FooterDiv = styled.div`
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

const FooterHeader = styled(MainHeader)`
  font-size: 3.2rem;
  line-height: 3.6rem;
  margin-bottom: 3rem;
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
export default Footer;
