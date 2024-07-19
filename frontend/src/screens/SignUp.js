import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaCog } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { AiFillApple } from 'react-icons/ai';
import { FaHelmetSafety } from 'react-icons/fa6';



const SignUpPage = () => {
  return (
    <Container>
      <Circle1/>
      <Circle2 />
      <Circle3 />
      <Circle4 />
      <LoginBox>
        <LeftPanel>
          <Logo src={require('./Kairotic_M_Logo.png')} alt="Kairotic M Logo" />
          <RotatingIcon />
          <HelmetIcon />
        </LeftPanel>
        <RightPanel>
          <Title>Login</Title>
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <Button>Login</Button>
          <IconButton>
            <Icon>
              <AiFillApple size={20} />
            </Icon>
            Continue with Apple
          </IconButton>
          <IconButton>
            <Icon>
              <FcGoogle size={20} />
            </Icon>
            Continue with Google
          </IconButton>
        </RightPanel>
      </LoginBox>
    </Container>
  );
};

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: #e9f7f6;
  position: relative; 
`;

const Circle = styled.div`
  width: 350px;
  height: 300px;
  border-radius: 50%;
  background-color: #2a9d8f;
  position: absolute;
  opacity: 0.5; 
`;

const Circle1 = styled(Circle)`
  top: 8%;
  right: 25%;
`;

const Circle2 = styled(Circle)`
  top: 8%;
  right: 13%;
  background-color: #C1E9E5;
`;

const Circle3 = styled(Circle)`
  bottom: 13%;
  right: 10%;
`;
const Circle4 = styled(Circle)`
  bottom: 8%;
  right: 22%;
  background-color: #C1E9E5;
`;

const LoginBox = styled.div`
  display: flex;
  width: 60%;
  height: 70%;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  z-index: 1; 
`;

const LeftPanel = styled.div`
  flex: 1;
  background-color: #2a9d8f;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  position: relative;
`;

const RotatingIcon = styled(FaCog)`
  font-size: 85px;
  animation: ${rotate} 70s linear infinite;
  color: #D5EAE7;
  position: relative;
  bottom: %;
`;

const HelmetIcon = styled(FaHelmetSafety)`
  position: absolute;
  top: 25%;
  font-size: 90px;
  color: #D5EAE7;
`;

const Logo = styled.img`
  position: absolute;
  top: 5%;
  left: 15%;
  width: 20vw;
  height: auto; 
  max-width: 400px; 

  @media (max-width: 768px) {
    width: 30vw; // Adjust for smaller screens
  }

  @media (max-width: 480px) {
    width: 40vw; // Further adjust for very small screens
  }
`;

const RightPanel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  color: #2a9d8f;
`;

const Input = styled.input`
  width: 80%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #cccccc;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 80%;
  padding: 10px;
  margin: 20px 0;
  background-color: #2a9d8f;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #21867a;
  }
`;

const IconButton = styled.button`
  width: 80%;
  padding: 10px;
  margin: 10px 0;
  background-color: #ffffff;
  color: #2a9d8f;
  border: 1px solid #2a9d8f;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #f2f2f2;
  }
`;

const Icon = styled.span`
  margin-right: 10px;
  display: flex;
  align-items: center;
`;

export default SignUpPage;
