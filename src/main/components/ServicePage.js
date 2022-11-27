import {Col, Container, Row} from "react-bootstrap";
import {RiCustomerService2Fill as CustomerServiceIcon} from "react-icons/ri";
import {BsCreditCard as CreditCardIcon} from "react-icons/bs";
import {AiOutlineCar as CourierIcon} from "react-icons/ai";
import "../styles/servicePageStyle.css";

export default function ServicePage() {
    return (
        <>
            <Container className={'servicePage'}>
                <Row className={'text-center'}>
                    <Col className={'serviceCard rounded m-2 p-2'}>
                        <CustomerServiceIcon size={100}/>
                        <div>
                            Customer Service 24/7
                        </div>
                    </Col>
                    <Col className={'serviceCard rounded m-2 p-2'}>
                        <CreditCardIcon size={100}/>
                        <div>
                            E-Payment Available
                        </div>
                    </Col>
                    <Col className={'serviceCard rounded m-2 p-2'}>
                        <CourierIcon size={100}/>
                        <div>
                            Courier Service All Over The World
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}