import {
  HeroSection,
  HeroTitle,
  HeroContainer,
  HeroDescription,
  HeroActionBtn,
  NextSectionBtn,
} from "./style";

const Hero = () => {
  return (
    <HeroSection>
      <HeroContainer>
        <HeroTitle>Keep track off all your customers</HeroTitle>
        <HeroDescription>
          Communication inside teams is more important than ever. We can help
          with scalable team workflows for the whole organisation.
        </HeroDescription>
        <HeroActionBtn to="/register">Sign up today</HeroActionBtn>
      </HeroContainer>
      <NextSectionBtn>Read More</NextSectionBtn>
    </HeroSection>
  );
};

export default Hero;
