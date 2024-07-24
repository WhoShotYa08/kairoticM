import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
import { toast } from "react-toastify";
import styled, { keyframes } from "styled-components";
import { FaCog } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import { FaHelmetSafety } from "react-icons/fa6";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import "../assets/styles.css";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const RotatingIcon = styled(FaCog)`
  font-size: 85px;
  animation: ${rotate} 70s linear infinite;
  color: #d5eae7;
  position: relative;
  bottom: %;
`;

const HelmetIcon = styled(FaHelmetSafety)`
  ${"" /* position: absolute; */}
  top: 25%;
  font-size: 90px;
  color: #d5eae7;
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
  const redirect = sp.get("redirect") || "/";

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
    <FormContainer>
      <Row>
        <Col md={6} style={{ backgroundColor: "teal", flex: 1 }}>
          <img
            src="/images/logo.png"
            alt="KairoticM's Logo"
            className="nav-logo"
          />
          <Row>
            <HelmetIcon />
          </Row>

          <Row>
            <RotatingIcon />
          </Row>
        </Col>

        <Col md={6} sm={12}>
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

            <Button
              type="submit"
              variant="primary"
              className="mt-2"
              disabled={isLoading}
            >
              Login
            </Button>
            {isLoading && <Loader />}
          </Form>

          <Button className="mx-auto my-2 icon-btn">
            <AiFillApple size={20} color="black" />
            Continue with Apple
          </Button>

          <Button className="mx-auto my-2 icon-btn">
            <FcGoogle size={20} />
            Continue with Google
          </Button>
        </Col>
      </Row>
    </FormContainer>
  );
}

export default LoginScreen;
