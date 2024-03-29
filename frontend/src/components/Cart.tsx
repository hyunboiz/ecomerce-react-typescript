import { Offcanvas, Stack } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem"
import formatCurrency from "../ultilities/formatCurrency";
import dataItems from "../data/dataItems.json"
interface CartContextProps {
    isOpen : boolean
}

function Cart({isOpen} : CartContextProps) {
    const {closeCart, cartItems} = useCart()
    return(
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    
                    {cartItems.map(item => (
                        <CartItem key={item.id} {...item} />
                    ))}
                    <div className="ms-auto fw-bold fs-5">
                        Total{" "}$
                        {formatCurrency(
                        cartItems.reduce((total, cartItem) => {
                            const item = dataItems.find(i => i.id === cartItem.id)
                            return total + (item?.price || 0) * cartItem.quantity
                        }, 0)
                        )}
                    </div>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default Cart