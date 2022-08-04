import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
const Login = () => {
  const [token, setToken] = useState(null);
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  if (token !== null) {
    return <Navigate to={"/home"} />;
  }
  const handleChange = (event) => {
    let value = event.target.value;
    let nameOfInput = event.target.name;
    setInput({ ...input, [nameOfInput]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = input;
    axios
      .post(`https://backendexample.sanbersy.com/api/user-login`, {
        email: username,
        password: password,
      })
      .then((e) => {
        setToken(e.data.token);
        let token = e.data.token;
        let name = e.data.user?.name;
        Cookies.set("token", token, { expires: 1 });
        Cookies.set("name", name, { expires: 1 });
        setTimeout(() => {
          window.location.reload();
        }, 500);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Helmet title='Login'>
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='12' className='m-auto text-center'>
              <form className='mb-5' onSubmit={handleSubmit}>
                <div className='form__group'>
                  <input
                    type='email'
                    placeholder='Email'
                    required
                    onChange={handleChange}
                    value={input.username}
                    name='username'
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
                  Login
                </button>
              </form>
              <Link to='/register'>
                Don't have an account? Create an account
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
