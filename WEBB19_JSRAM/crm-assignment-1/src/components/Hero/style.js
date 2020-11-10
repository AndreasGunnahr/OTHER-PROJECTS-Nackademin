import styled from "styled-components";
import { H1, P } from "components/Shared";
import { OrangeLinkButton } from "components/Button";

export const HeroSection = styled.div`
  height: 100%;
  max-width: 1900px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 5%;
`;

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -100px;
  @media (min-width: 1024px) {
    margin-top: -200px;
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

export const HeroActionBtn = styled(OrangeLinkButton)`
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

export const HeroTitle = styled(H1)``;

export const NextSectionBtn = styled(P)`
  text-transform: uppercase;
  font-size: 14px;
  position: absolute;
  cursor: pointer;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;
