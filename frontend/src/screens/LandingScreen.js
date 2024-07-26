import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useInView } from 'react-intersection-observer';
import ReactPlayer from 'react-player';

// Animations
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Styled Components
const AppContainer = styled.div`
  background-color: white;
  min-height: 100vh;
  font-family: 'Arial', sans-serif;
  overflow-x: hidden;
`;

const Header = styled.header`
  background-color: #4E9E8B;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const LogoIcon = styled.img`
  height: 30px;
  margin-right: 10px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const HeroSection = styled.div`
  position: relative;
  height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  width: 100%; /* Ensure the section takes full width */

  @media (max-width: 768px) {
    height: 60vh;
  }

  @media (max-width: 480px) {
    height: 50vh;
  }
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const HeroContent = styled.div`
  z-index: 1;
  padding: 1rem;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  animation: ${fadeIn} 2s ease-out;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  color: #C1E9E5;
  animation: ${fadeIn} 2s ease-out 0.5s both;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Button = styled.button`
  background-color: #4E9E8B;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 2rem;
  transition: all 0.3s ease;
  animation: ${fadeIn} 2s ease-out 1s both;

  &:hover {
    background-color: #C1E9E5;
    color: #4E9E8B;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.6rem 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
  }
`;

const FeaturesSection = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 6rem 2rem;
  background-color: #f8f8f8;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 4rem 1rem;
  }

  &.animate {
    & > div {
      opacity: 1;
      transform: translateY(0);
      animation: ${fadeIn} 3s forwards;
    }
  }
`;

const FeatureCard = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(20px);
  width: 300px;
  margin: 0 1rem;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 1rem 0;
  }
`;

const FeatureIcon = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 1.5rem;
  object-fit: cover;
  border-radius: 50%;
`;

const FeatureTitle = styled.h3`
  color: #4E9E8B;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  color: #333;
  font-size: 1rem;
  line-height: 1.5;
`;

const LandingScreen = () => {
  const [progress, setProgress] = useState(0);
  const { ref: heroRef } = useInView({
    triggerOnce: true,
    threshold: 0.3, // Adjusted threshold to control when the animation triggers
  });
  const { ref: featuresRef, inView: featuresInView } = useInView({
    triggerOnce: false,
    threshold: 0.3, // Adjusted threshold to control when the animation triggers
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => (oldProgress >= 100 ? 0 : oldProgress + 1));
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <AppContainer>

      <HeroSection ref={heroRef}>
        <ReactPlayer
          url='https://www.youtube.com/watch?v=yN7zQvAv8d8'
          playing
          loop
          muted
          width='100%'
          height='100%'
          style={{ position: 'absolute', top: 0, left: 0 }}
        />
        <HeroOverlay />
        <HeroContent>
          <HeroTitle>Streamline Your Construction Process</HeroTitle>
          <HeroSubtitle>Track Progress, Manage Designs, Collaborate Effortlessly</HeroSubtitle>
          <Button>Get Started</Button>
        </HeroContent>
      </HeroSection>
      <FeaturesSection ref={featuresRef} className={featuresInView ? 'animate' : ''}>
        <FeatureCard>
          <FeatureIcon src={require('../assets/progress.jpg')} alt="Progress Tracking" />
          <FeatureTitle>Progress Tracking</FeatureTitle>
          <FeatureDescription>Real-time updates on your projects with interactive dashboards and timelines.</FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon src={require('../assets/OIP.jpeg')} alt="Design Upload" />
          <FeatureTitle>Design Upload & Authorization</FeatureTitle>
          <FeatureDescription>Seamless design management with secure file sharing and approval workflows.</FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon src={require('../assets/compliance.jpg')} alt="Spec Compliance" />
          <FeatureTitle>Spec Compliance Checks</FeatureTitle>
          <FeatureDescription>Automated checks to ensure designs meet all required specifications and standards.</FeatureDescription>
        </FeatureCard>
      </FeaturesSection>
      {/* <ProgressBarContainer>
        <h3>Project Completion</h3>
        <ProgressBar>
          <ProgressFill style={{ width: `${progress}%` }} />
        </ProgressBar>
      </ProgressBarContainer> */}
    </AppContainer>
  );
};

export default LandingScreen;
