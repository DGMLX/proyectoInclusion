import { Link } from "react-router-dom"
import "./sliderHome.css"

export const SliderHome = () =>{
    return(
        <>
        <div className="slider">
        <div className="row texto-section1 mt-5 ">
                        <div className="col-10 w-100 mb-3">
                            <h2 className="text-white text-center fs-1">Vivo Inclusión</h2>
                        </div>
                        <div className="col-10 w-100">
                            <p className="text-white text-center fs-5">Te invita a colaborar con los niños y adolescentes en situación de discapacidad intelectual</p>
                        </div>
                        <div className="w-100 d-flex justify-content-center mt-3">
                            <Link className="btn-section1 enlace" to="/contacto" >Contáctanos</Link>
                        </div>
                </div>
        </div>
        
        </>
    )
}