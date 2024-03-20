import { Button, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

function Home () {
    return (
            <Container>
                <Row className="flex-lg-row-reverse align-items-center g-5 py-5">
                    <Col className="col-10 col-sm-8 col-lg-6">
                        <img src="../public/images/1.jpg" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
                    </Col>
                    <Col className="col-lg-6">
                        <h1 className="display-5 fw-bold lh-1 mb-3">Buy a best <b>iPhone</b> with CadyPhone</h1>
                        <p className="lead">Gorgeous and Durable Design with Great Battery Life, official store distributing iPhone in Vietnam</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <Link to="/store">
                            <Button className="px-4 me-md-2" variant="outline-danger" size="lg">Shoping now</Button>
                        </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
            
    )
}
export default Home