import "../styles/headerStyle.css";
import {Outlet} from "react-router";

export default function Header() {

    return (
        <>
            <div className={'headerNavbar d-flex align-items-center justify-content-between p-2'}>
                <div className={'headerNavbarName flex-fill'}
                     onClick={()=>window.location.replace("/")}
                >Shop</div>
                <div className={'d-flex p-2'}>
                    <div className={'mx-2 navbarAttributes'} onClick={()=>window.location.replace("/categories")}>Category</div>
                    <div className={'mx-2 navbarAttributes'} onClick={()=>window.location.replace("/aboutus")}>About Us</div>
                </div>
            </div>
            <Outlet/>
        </>
    )
}