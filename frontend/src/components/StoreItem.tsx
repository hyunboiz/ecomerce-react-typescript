import {Button, Card, CardBody, CardHeader, CardImg, CardText, CardTitle} from "react-bootstrap"
import formatCurrency from "../ultilities/formatCurrency";
import { useCart } from "../context/CartContext";
interface StoreItem {
    id: number;
    name: string;
    price: number;
    images: string
}
function StoreItem({id, name, price, images} : StoreItem)  {
    const { getQuantity, increaseQuantity, decreaseQuantity, removeFromCart } = useCart()
    const quantity = getQuantity(id)

    return (

        <Card>
            <CardBody>
                <CardImg src={images}></CardImg>
                <CardTitle className="text-center">{name}</CardTitle>
                <CardText>Price: ${formatCurrency(price)}</CardText>
                {quantity === 0 ? (
                    <Button variant="success" className="w-100" onClick={() => increaseQuantity(id)}>Add to cart</Button>
                )
                : (
                    <div className="d-flex align-items-center flex-column" style={{gap: '.5rem'}}>
                        <div className="d-flex align-items-center justify-content-center" style={{gap: '.5rem'}}>
                            <Button onClick={() => decreaseQuantity(id)}>-</Button>
                            <span>{quantity} in cart</span>
                            <Button onClick={() => increaseQuantity(id)}>+</Button>
                        </div>
                        <Button variant="danger" onClick={() => removeFromCart(id)}>Remove</Button>
                    </div>
                )
                 }

            </CardBody>
        </Card>

    )
}
export default StoreItem