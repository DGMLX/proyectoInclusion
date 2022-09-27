import { Link } from "react-router-dom"
import "./footer.css"

export const Footer = () =>{
    return(
        <>
            <footer>
                <div className="container-fluid h-100">
                    <div className="row justify-content-between align-items-center h-100">
                        <div className="col-md-4 col-12 text-center">
                            <img src="/logo-mejorninez1.jpg" alt="logotipo_mejorniñez" className="col-3 col-md-4" />
                            <img src="/logo-mejorninez3.png" alt="logotipo_mejorniñez" className="col-3 col-md-4" />
                            <img src="/logotipo-vivoinclusion.png" alt="logotipo_vivoinclusion" className="col-3 col-md-4" />
                        </div>
                        
                        <div className="col-5 d-none d-md-block">
                            <nav className="text-start">
                                <Link to="/" className="nav-link">-Inicio</Link>
                                <Link to="/nosotros" className="nav-link">-Sobre nosotros</Link>
                                <Link to="/servicios" className="nav-link">-Nuestros servicios</Link>
                                <Link to="/contacto" className="nav-link">-Contácanos</Link>
                            </nav>
                        </div>
                    </div>

                </div>
            </footer>
        </>
    )
}