import axios from "axios";
import {useEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import "../styles/productStyle.css";

export default function Product() {
    const [product, setProduct] = useState([]);
    const productID = localStorage.getItem("productItemIDNow");
    const [image1, setImage1] = useState("");
    const [image2, setImage2] = useState("");
    const [image3, setImage3] = useState("");
    const [image4, setImage4] = useState("");

    const getProduct = async () => {
        await axios.get(`https://api.escuelajs.co/api/v1/products/${productID}`)
            .then(response => {
                setProduct(response.data);
                setImage1(response.data.category.image);
                setImage2(response.data.images[0]);
                setImage3(response.data.images[1]);
                setImage4(response.data.images[2]);
            })
            .catch(error => console.error(error + " Error getting product from api"))
    }

    useEffect(() => {
        getProduct();
    }, [])

    return (
        <>
            <div>

                <Container className={'bg-dark'}>
                    <Row className={"w-100"} >
                        <Col className={'m-2 pt-5'} sm={12} md={6} lg={6} xl={4} xxl={3}>
                            <img className={'productImage'} src={image1} alt={'product foto'}/>
                        </Col>
                        <Col className={'m-2 pt-5'} sm={12} md={6} lg={6} xl={4} xxl={3}>
                            <img className={'productImage'} src={image2} alt={'product foto'}/>
                        </Col>
                        <Col className={'m-2 pt-5'} sm={12} md={6} lg={6} xl={4} xxl={3}>
                            <img className={'productImage'} src={image3} alt={'product foto'}/>
                        </Col>
                        <Col className={'m-2 pt-5'} sm={12} md={6} lg={6} xl={4} xxl={3}>
                            <img className={'productImage'} src={image4} alt={'product foto'}/>
                        </Col>
                    </Row>
                    <Row className={'text-light border'}>
                        <div>Product name: {product.title}</div>
                        <div>Product cost: {product.price}$</div>
                        <div>Product description: {product.description}</div>
                    </Row>
                </Container>
            </div>
        </>
    )
}