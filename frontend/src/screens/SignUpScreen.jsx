import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Form, Button as BootstrapButton, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
import { toast } from "react-toastify";
import styled, { keyframes } from "styled-components";
import { FaCog } from "react-icons/fa";
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
  min-height: 100vh;
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

const SignUpBox = styled.div`
  display: flex;
  width: 80%;
  max-width: 900px;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  z-index: 1;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    width: 70%;
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
  flex: 2;
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

export default function SignUpScreen() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, redirect, navigate]);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    } else {
      try {
        const res = await register({ name, surname, email, password }).unwrap();

        dispatch(setCredentials({ ...res }));

        navigate(redirect);
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <Container>
      <Circle1 />
      <Circle2 />
      <Circle3 />
      <Circle4 />
      <SignUpBox>
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
            <Title>Sign Up</Title>
            <Form onSubmit={submitHandler}>
              <Row className="my-3">
                <Col md={6}>
                  <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={name}
                      onChange={(x) => setName(x.target.value)}
                      placeholder="Name"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="surname">
                    <Form.Label>Surname</Form.Label>
                    <Form.Control
                      type="text"
                      value={surname}
                      onChange={(x) => setSurname(x.target.value)}
                      placeholder="Surname"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group controlId="email" className="my-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(x) => setEmail(x.target.value)}
                  placeholder="Email"
                />
              </Form.Group>

              <Form.Group controlId="password" className="my-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(x) => setPassword(x.target.value)}
                  placeholder="Password"
                />
              </Form.Group>

              <Form.Group controlId="confirmPassword" className="my-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  value={confirmPassword}
                  onChange={(x) => setConfirmPassword(x.target.value)}
                  placeholder="Confirm Password"
                />
              </Form.Group>

              <BootstrapButton
                type="submit"
                variant="primary"
                className="mt-2 w-100"
                disabled={isLoading}
              >
                Sign Up
              </BootstrapButton>
              {isLoading && <Loader />}
            </Form>
            <Row className="py-3">
              <Col>
                Already have an account?{" "}
                <Link to={redirect ? `/?redirect=${redirect}` : "/"}>
                  Login
                </Link>
              </Col>
            </Row>
          </FormContainer>
        </RightPanel>
      </SignUpBox>
    </Container>
  );
}
