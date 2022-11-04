import { Container, Col, Row } from "react-bootstrap";
import "./App.css";
import Register from "./Register";
import Login from "./Login";

function App() {
  return (
    <Container>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <Register />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <Login />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}></Col>
        </Row>
      </Container>
    </Container>
  );
}

export default App;
