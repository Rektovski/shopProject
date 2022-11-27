import "../styles/aboutUsStyle.css";
import Footer from "./Footer";
import adminImage from "../images/admin.jpg";
import {Container} from "react-bootstrap";

export default function AboutUs() {

    return (
        <>
            <div>
                <div className={'mainBackground'}>

                    <div >
                        <div className={'d-flex justify-content-center'}>
                            <div className={'ownerFaceSpace'}>
                                <img className={'ownerFace'} src={adminImage} alt={"owner foto"}/>
                            </div>

                        </div>
                        <div className={'text-center mt-3'}>
                            <div>
                                Owner: Otto Murmanishvili
                            </div>
                            <Container>
                                <div className={'textSpaceBackGround'}>
                                    <p>
                                        Get everything you love from the USA with the MyUS Shopping extension! Shop hundreds of US
                                        websites, checkout with one cart, and get cheap international delivery to 200+ countries
                                        worldwide.
                                    </p>
                                    <p>
                                        MyUS Shopping was created to eliminate the frustrations many global customers face when checking
                                        out on multiple US websites, as well as the high cost of shipping direct from stores. MyUS
                                        Shopping is backed by over 25 years of global eCommerce experience, and boasts an expert packing
                                        team that will combine your purchases into one box. Shopping US stores is finally easy,
                                        secure—and best of all—affordable for customers around the globe!
                                    </p>
                                    <p>
                                        MyUS Shopping, makes it easy to get what you want from these popular American stores, and many
                                        more
                                    </p>
                                </div>
                            </Container>
                        </div>

                    </div>
                </div>

                <Footer/>
            </div>
        </>
    )
}