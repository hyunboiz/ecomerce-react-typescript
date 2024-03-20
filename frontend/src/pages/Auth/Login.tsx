import { useState } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"

function Login(){

    function handleSubmit() {

    }
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
    <Container fluid className="auth-wrapper">
      <Row className="justify-content-md-center">
        <Col md={6} className="auth-inner">
          <Form onSubmit={handleSubmit}>
            <h3>Sign In</h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Remember me"
              />
            </Form.Group>
            <Button variant="primary" className="w-100" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    )
}

export default Login