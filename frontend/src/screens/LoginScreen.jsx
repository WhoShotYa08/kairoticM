import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Navbar,
  Nav,
  Form,
  Button as BootstrapButton,
  Row,
  Col,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
import { toast } from "react-toastify";
import styled, { keyframes } from "styled-components";
import { FaCog } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import { FaHelmetSafety } from "react-icons/fa6";
import Loader from "../components/loader";
import FormContainer from "../components/FormContainer";
import "../assets/styles.css";

// Keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Styled Components
const Container = styled.div`
  display: flex;
  height: 110vh;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 20px;
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
  background-color: #c1e9e5;
`;

const Circle3 = styled(Circle)`
  bottom: 13%;
  right: 10%;
`;

const Circle4 = styled(Circle)`
  bottom: 8%;
  right: 22%;
  background-color: #c1e9e5;
`;

const LoginBox = styled.div`
  display: flex;
  width: 80%;
  height: 80%;
  max-width: 900px;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  z-index: 1;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    width: 60%;
    height: 70%;
  }
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
  padding: 20px;
`;

const RotatingIcon = styled(FaCog)`
  font-size: 85px;
  animation: ${rotate} 70s linear infinite;
  color: #d5eae7;

  @media (max-width: 768px) {
    display: none;
  }
`;

const HelmetIcon = styled(FaHelmetSafety)`
  position: absolute;
  top: 25%;
  font-size: 90px;
  color: #d5eae7;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Logo = styled.img`
  position: absolute;
  top: 5%;
  left: 15%;
  width: 30vw;
  height: auto;
  max-width: 150px;

  @media (min-width: 768px) {
    width: 20vw;
    max-width: 400px;
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
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #cccccc;
  border-radius: 5px;
`;

const IconButton = styled.button`
  width: 100%;
  padding: 8px;
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
    background-color: #d5eae7;
  }
`;

const Icon = styled.span`
  margin-right: 10px;
  display: flex;
  align-items: center;
  color: black;
`;

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/home";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, redirect, navigate]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();

      dispatch(setCredentials({ ...res }));

      navigate(redirect);
    } catch (err) {
      console.log(err);
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <Container>
      <Circle1 />
      <Circle2 />
      <Circle3 />
      <Circle4 />
      <LoginBox>
        <LeftPanel>
          <Logo
            src={require("../assets/Kairotic_M_Logo.png")}
            alt="Kairotic M Logo"
          />
          <RotatingIcon />
          <HelmetIcon />
        </LeftPanel>
        <RightPanel>
          <FormContainer>
            <Title>Login</Title>
            <Form onSubmit={submitHandler}>
              <Form.Group controlId="email" className="my-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(x) => setEmail(x.target.value)}
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group controlId="password" className="my-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(x) => setPassword(x.target.value)}
                  placeholder="Enter password"
                />
              </Form.Group>

              <BootstrapButton
                type="submit"
                variant="primary"
                className="mt-2 w-100"
                disabled={isLoading}
              >
                Login
              </BootstrapButton>
              {isLoading && <Loader />}
            </Form>

            <IconButton className="mx-auto my-2">
              <Icon>
                <AiFillApple size={20} />
              </Icon>
              Continue with Apple
            </IconButton>

            <IconButton className="mx-auto my-2">
              <Icon>
                <FcGoogle size={20} />
              </Icon>
              Continue with Google
            </IconButton>
          </FormContainer>
        </RightPanel>
      </LoginBox>
    </Container>
  );
}

export default LoginScreen;
