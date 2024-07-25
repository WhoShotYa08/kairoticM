import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
import { toast } from "react-toastify";
// import styled, { keyframes } from "styled-components";
// import { FaCog } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";
// import { AiFillApple } from "react-icons/ai";
// import { FaHelmetSafety } from "react-icons/fa6";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import "../assets/styles.css";

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
    <FormContainer>
      <h1>Sign Up</h1>
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

        <Button
          type="submit"
          variant="primary"
          className="mt-2"
          disabled={isLoading}
        >
          Sign Up
        </Button>
      </Form>
      <Row className="py-3">
        <Col>
          Already have an account?{" "}
          <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
            Login
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
}
