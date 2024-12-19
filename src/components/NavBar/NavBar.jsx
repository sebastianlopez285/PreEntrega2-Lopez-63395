import "./navbar.scss"
import CartWidget from "./CartWidget";
import Banner from "../Banner/Banner";

const NavBar = () => {


    return (
        <nav className="navbar">
            <div className="brand">
                <img src="" alt="Brsl" />
                <h1>Modulos Brsl</h1>
            </div>

            <ul className="categories">
                <li>Modulos</li>
                <li>Touch</li>
                <li>Herramientas e Insumos</li>
                <li>Servicio Técnico y Reparación</li>
            </ul>


            <CartWidget />
        </nav>
    )
}

export default NavBar;
