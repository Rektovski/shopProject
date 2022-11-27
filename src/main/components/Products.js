import {useEffect, useState} from "react";
import Footer from "./Footer";
import "../styles/categoriesStyle.css";
import axios from "axios";
import {Col, Row} from "react-bootstrap";

export default function Products(){
    const [categories, setCategories] = useState([]);

    const getCategories = async () => {
        await axios.get("https://api.escuelajs.co/api/v1/categories")
            .then(response => setCategories(response.data))
            .catch(error => console.error(error + "Error During getting categories list"));
    }

    useEffect(()=>{
        getCategories();
    }, [])

    return (
        <>
            <div className={'mainBackground'}>
                <Row className={'categories'}>
                    {
                        categories.map((item, id) => (
                            <Col key={id} sm={12} md={6} lg={4} xl={4} xxl={3} className={'categorySpace border'}>
                                <div className={'categoryName text-center'}>{`${item.id} ${item.name}`}</div>
                                <div className={'d-flex justify-content-center'}>
                                    <div className={'categoryImageSpace'}>
                                        <img className={'categoryImage'} src={item.image} alt={'category foto'}/>
                                    </div>
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