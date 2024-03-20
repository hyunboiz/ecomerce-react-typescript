import {Col, Row } from "react-bootstrap"
import storeDataItem from "../data/dataItems.json"
import StoreItem from "../components/StoreItem" 

function Store () {
    return (
       <>
        <Row>
            {storeDataItem.map(item => (
                <Col key={item.id}>
                    <StoreItem {...item}/>
                </Col>     
                ))}
        </Row>
       </>
    )
}
export default Store