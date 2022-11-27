import {useEffect, useState} from "react";
import Footer from "./Footer";
import "../styles/categoriesStyle.css";
import axios from "axios";
import {Col, Row} from "react-bootstrap";

export default function Categories(){
    const [categories, setCategories] = useState([]);

    const getCategories = async () => {
        await axios.get("https://api.escuelajs.co/api/v1/categories")
            .then(response => setCategories(response.data))
            .catch(error => console.error(error + "Error During getting categories list"));
    }

    useEffect(()=>{
        getCategories();
    }, [])

    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        const handleWindowResize = () => setWindowSize(getWindowSize());
        window.addEventListener('resize', handleWindowResize);
        console.log('AboutUs.js');
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return (
        <>
            <div className={'mainBackground'}>
                <Row className={'categories'}>
                    {
                        categories.map((item, id) => (
                            <Col key={id} sm={12} md={6} lg={4} xl={4} xxl={3} className={'categorySpace'}>
                                <div className="card">
                                    <img onClick={()=>window.location.replace(`/categories/${item.id}`)}
                                         src={item.image} className="card__image" alt="category foto"/>
                                    {
                                        windowSize < 600 ?
                                            <div className="card__overlay">
                                                <div className="card__header">
                                                    <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                                                        <path/>
                                                    </svg>
                                                    <div className="card__header-text">
                                                        <span className="card__status">Description: {item.name}</span>
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
                                                        <span className="card__status">{item.id}</span>
                                                    </div>
                                                </div>
                                                <p className="card__description">{item.name}</p>
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