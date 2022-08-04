import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    let value = event.target.value;
    let nameOfInput = event.target.name;
    setInput({ ...input, [nameOfInput]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, password } = input;
    axios
      .post(`https://backendexample.sanbersy.com/api/register `, {
        name: name,
        email: email,
        password: password,
      })
      .then((e) => {
        setTimeout(() => {
          window.location.reload();
        }, 700);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Helmet title='Signup'>
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='12' className='m-auto text-center'>
              <form className='mb-5' onSubmit={handleSubmit}>
                <div className='form__group'>
                  <input
                    type='text'
                    placeholder='Full name'
                    required
                    onChange={handleChange}
                    value={input.name}
                    name='name'
                  />
                </div>
                <div className='form__group'>
                  <input
                    type='email'
                    placeholder='Email'
                    required
                    onChange={handleChange}
                    value={input.email}
                    name='email'
                  />
                </div>
                <div className='form__group'>
                  <input
                    type='password'
                    placeholder='Password'
                    required
                    onChange={handleChange}
                    value={input.password}
                    name='password'
                  />
                </div>
                <button type='submit' className='addTOCart__btn'>
                  Sign Up
                </button>
              </form>
              <Link to='/login'>Already have an account? Login</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Register;
