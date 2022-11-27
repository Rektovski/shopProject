import "../styles/footerStyle.css";

export default function Footer() {
    return (
        <>
            <div className={'footerSpace text-center'}>
                {new Date().getFullYear().toString()} - All rights reserved!
            </div>
        </>
    )
}