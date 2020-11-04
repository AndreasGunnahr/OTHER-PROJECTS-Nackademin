import styled from "styled-components";
import { H1, P, A } from "components/Shared";
import { OrangeButton } from "components/Button";

export const HeroSection = styled.div`
  height: calc(100vh - 58px);
  max-width: 1900px;
  margin: 0 auto;
  display: flex;
  padding: 0 5%;
  @media (min-width: 1024px) {
    height: calc(100vh - 70px);
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 1024px) {
    margin-top: -200px;
    padding-right: 2rem;
  }
`;

export const HeroDescription = styled(P)`
  margin-top: 1.5rem;
  font-size: 1rem;
  max-width: 60ch;
  line-height: 1.75rem;
  @media (min-width: 1024px) {
    font-size: 1.25rem;
    max-width: 70ch;
  }
`;

export const HeroActionBtn = styled(OrangeButton)`
  margin-top: 2rem;
  height: 50px;
  width: 100%;
  max-width: 500px;
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;
  @media (min-width: 768px) {
    height: 70px;
    font-size: 20px;
  }
`;

export const HeroTitle = styled(H1)`
  margin-top: 2rem;
  @media (min-width: 1024px) {
    margin: 0;
    font-size: 3rem;
  }
`;

export const NextSectionBtn = styled(A)`
  text-transform: uppercase;
  font-size: 14px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;
