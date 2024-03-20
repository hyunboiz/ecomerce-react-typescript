import {Col, Row } from "react-bootstrap"
import StoreItem from "../components/StoreItem" 
import { useContext, useEffect, useState } from "react"
import axios from "axios"

interface IProduct{
    id: number
    name: string
    price: number
    images: string
}

function Store () {
    const [products, setProducts ] = useState<IProduct[]>([]);

    useEffect(() => {
        console.log("get products from api");
        const getProducts = async () => {
            try {
                const res = await axios.post(`http://localhost:6060/api/v1/products`)
                console.log(res.data)
                setProducts(res.data)

            } catch (error) {
                console.log("err", error);
                
            }
        }
        getProducts()
    }, [])
    return (
        
       <>
        <Row>
            {products.map(item => (
                <Col key={item.id}>
                    <StoreItem {...item}/>
                </Col>     
                ))}
        </Row>
       </>
    )
}
export default Store