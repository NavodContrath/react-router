import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
export default function Layout() {
    return (
        <>
            <header className="bg-success py-3">
                <div className="m-auto" style={{ width: "1500px" }}>
                    <div className="d-flex justify-content-between">
                        <div className="logo">
                            <h2>LOGO</h2>
                        </div>
                        <ul className="nav justify-content-between">
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/" aria-current="page">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/about-us">About us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/products">Products</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            <Outlet />
            <footer className="bg-dark py-3">
                <div className="m-auto" style={{ width: "1500px" }}>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="">
                            <h5>Logo.inc...@2025</h5>
                        </div>
                        <ul className="nav justify-content-between">
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Contact us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Socials</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>

        </>
    )
}