import "./../styles/mainStyle.css";
import ServicePage from "./ServicePage";
import Footer from "./Footer";

export default function Main() {
    return (
        <>
            <div className={'mainBackground'}>
                <div className={'servicePage'}>
                    <ServicePage/>
                </div>
            </div>
            <Footer/>
        </>
    )
}