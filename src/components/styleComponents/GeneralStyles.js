import styled from "styled-components";

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

const AnotherMainHeader = styled.h1`
  color: #28283d;
  font-weight: 900;
  font-size: 3.2rem;
  line-height: 3.6rem;
  margin-bottom: 3rem;
`;

export { MainHeader, Paragraph, BigBTN, SmallBTN, AnotherMainHeader };
