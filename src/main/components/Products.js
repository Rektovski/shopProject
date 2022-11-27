import {useEffect, useState} from "react";
import Footer from "./Footer";
import "../styles/categoriesStyle.css";
import axios from "axios";
import {Col, Row} from "react-bootstrap";

export default function Products(){
    const [products, setProducts] = useState([]);
    const categoryID = localStorage.getItem("productsCategoryIDNow");

    const getProducts = async () => {
        await axios.get("https://api.escuelajs.co/api/v1/products")
            .then(response => {
                setProducts(response.data.filter(obj => obj.category.id === parseInt(categoryID)))
            })
            .catch(error => console.error(error + "Error During getting products list"));
    }

    useEffect(()=>{
        getProducts();
    }, [])

    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        const handleWindowResize = () => setWindowSize(getWindowSize());
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return (
        <>
            <div className={'mainBackground'}>
                <Row className={'categories'}>
                    {
                        products.map((item, id) => (
                            <Col key={id} sm={12} md={6} lg={4} xl={4} xxl={3} className={'categorySpace'}>
                                <div className="card">
                                    <img src={item.category.image} className="card__image" alt="product foto"/>
                                    {
                                        windowSize < 600 ?
                                            <div className="card__overlay">
                                                <div className="card__header">
                                                    <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                                                        <path/>
                                                    </svg>
                                                    <div className="card__header-text">
                                                        <h3 className={"card__title"}>{item.title}</h3>
                                                        <span className="card__status">{`Cost: ${item.price}$`}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            :
                                            <div className="card__overlay">
                                                <div className="card__header">
                                                    <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                                                        <path/>
                                                    </svg>
                                                    <div className="card__header-text">
                                                        <h3 className={"card__title"}>{item.title}</h3>
                                                        <span className="card__status">{`Cost: ${item.price}$`}</span>
                                                    </div>
                                                </div>
                                                <p className="card__description">{item.category.name}</p>
                                            </div>
                                    }
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </div>
            <Footer/>
        </>
    )
}


function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
}