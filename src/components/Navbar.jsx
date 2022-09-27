import { Link, NavLink } from "react-router-dom"
import "./navbar.css"

export const Navbar = () =>{
    const cerrarMenu = () =>{
        const show = document.querySelector(".navbar-collapse");
        show.classList.remove("show")
    }

    return(
        <header>
            <div className="text-center header-superior fs-3">
            <span>Hazte parte de esta causa<i className="bi bi-house-heart  ms-3"></i></span>
            </div>
            <nav className="navbar navbar-expand-lg py-3 nav-superior">
                <div className="container-fluid d-flex">
                    <div className="col-3">
                        <Link className="navbar-brand d-none d-lg-block" to="/"><img src="/logotipo-vivoinclusion.png" className="w-25" alt="logotipo_vivo_inclusion" /></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse col-9" id="navbarNav">
                        <ul className="navbar-nav w-100 d-flex justify-content-end me-lg-5 fs-5">
                            <li className="nav-item enlace-nav ">
                                <NavLink
                                    to="/"
                                    className="nav-link"
                                    onClick={cerrarMenu}
                                >
                                      <i className="bi bi-house-door-fill d-lg-none color-icon me-4"></i>Inicio  
                                </NavLink>
                            </li>
                            <li className="nav-item enlace-nav">
                                <NavLink 
                                    to="/nosotros"
                                    className= {({isActive})=>`nav-link ${isActive ? "active" : ""}`}
                                    onClick={cerrarMenu}
                                    >
                                    <i className="bi bi-people-fill d-lg-none color-icon me-4"></i>Nosotros
                                </NavLink>
                            </li>
                            <li className="nav-item enlace-nav">
                                <NavLink 
                                    to="/noticias"
                                    className= {({isActive})=>`nav-link ${isActive ? "active" : ""}`}
                                    onClick={cerrarMenu}
                                    >
                                    <i className="bi bi-people-fill d-lg-none color-icon me-4"></i>Noticias
                                </NavLink>
                            </li>
                            <li className="nav-item enlace-nav">
                                <NavLink
                                    onClick={cerrarMenu}
                                    className= {({isActive})=>`nav-link ${isActive ? "active" : ""}`}
                                    to="/servicios">
                                       <i className="bi bi-person-heart d-lg-none color-icon me-4"></i> Servicios
                                 </NavLink>
                            </li>
                            <li className="nav-item enlace-nav">
                                <NavLink
                                    onClick={cerrarMenu}
                                    className= {({isActive})=>`nav-link ${isActive ? "active" : ""}`}
                                    to="/contacto">
                                        <i className="bi bi-envelope-fill d-lg-none color-icon me-4"></i>Contacto
                                 </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

    )
}