import { Button, Stack } from "react-bootstrap"
import { useCart } from "../context/CartContext"
import dataItems from "../data/dataItems.json"
import formatCurrency from "../ultilities/formatCurrency"

interface CartItemProps {
   id: number
   quantity: number
}

function CartItem({id, quantity} : CartItemProps) {

    const {removeFromCart} = useCart()
    const item = dataItems.find(i => i.id === id) 
    if(item == null) return null
    return(
        <Stack direction="horizontal" gap={2}>
            <img src={item.image} style={{width: '50px'}}/>
            <div className="me-auto">
                <div>
                    {item.name} <span className="text-muted" style={{fontSize : '.7rem'}}>x{quantity}</span>
                </div>
            </div>
            <div className="text-muted">
                ${formatCurrency(item.price)}
            </div>
            <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(id)}>x</Button>
        </Stack>
    )
}
export default CartItem