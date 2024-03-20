import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { Link, NavLink } from "react-router-dom"
import { useCart } from "../context/CartContext"

function Navbar() {
    const {cartQuantity, openCart} = useCart()

    return (
        <NavbarBs sticky="top" className="bg-success shadow-sm mb-3 text-white">

            <Container>
                <Nav className="me-auto">
                    <Nav.Link to="/" as={NavLink} className="navbar-brand"><img src="../public/images/logo.png" alt="" width={120}/> </Nav.Link>
                    <Nav.Link to="/store" as={NavLink}>
                        Store
                    </Nav.Link>
                    <Nav.Link to="/about" as={NavLink}>
                        About
                    </Nav.Link>
                </Nav>
                {cartQuantity > 0 && (
                <Button onClick={openCart} className="rounded-circle m-2" variant="light" style={{width: '3rem', height: '3rem', position: 'relative'}}>Cart
                <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center" style={{ color: 'white', width: '1.5rem', height: '1.5rem', position: 'absolute', bottom: 0, right: 0, transform: 'translate(25%,25%)' }}>
                    {cartQuantity}
                </div>
                </Button>
                )}
                <Link to="/auth/login">
                    <Button variant="outline-warning" > Login</Button>
                </Link>
                <Link to="/auth/register">
                    <Button variant="warning" className="m-2"> Register</Button>
                </Link>
            </Container>

        </NavbarBs>
    )
}

export default Navbar

