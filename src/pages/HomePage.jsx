import { SliderHome } from "../components/SliderHome"
import {Link} from "react-router-dom"
import "./homeEstilos.css"

export const HomePage = () =>{

    const goingUp = () =>{
        window.scrollTo(0,0)
    }
    return(
        <>
            <SliderHome/>
            <div className="container mt-5">
            <h1 className="mt-4 text-center text-md-start mb-5">¿Quienes somos?</h1>
                <div className="row d-flex justify-content-around ">
                    <div className="col-12 col-md-7 text-center text-md-start">
                        <p>
                            Somos un organismo colaborador acreditado del Servicio llamado Corporación Vivo Inclusión, cuyo objetivo primordial es acoger y dar continuidad de cuidados a niños y adolescentes entre 6 y 17 años en situación de discapacidad intelectual, contribuir a reestablecer los derechos vulnerados de los niños, garantizar el bienestar de ellos, y hacer los esfuerzos que sean necesarios para lograr la reinserción familiar y comunitaria.
                            <br/> <br/>
                            Contamos con dos residencias, una ubicada en la comuna de limache llamada "Residencia nuevo caminar" y otra en la comuna de chillán con el nombre de "Villa nuevo caminar".
                            <br/>
                             Ambas residencias cuentan con un estándar de cuidadores que logre efectivamente un trato personalizado y un equipo interdisciplinario, compuesto por psicólogos, trabajadoras sociales, terapeuta ocupacional, kinesiólogo, neurólogo y TENS. 
                        </p>
                    </div>
                    <div className="text-center col-12 col-md-4 d-flex align-items-center justify-content-center">
                        <img src="/logotipo-vivoinclusioncolor.png" className="logotipo-home" alt=""/>
                    </div>
                </div>

                

            </div>

            <div className="container">
                <h2 className="text-center mt-5 mb-5">Actividades y noticias</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod voluptatum, aliquid porro aliquam dolorum dignissimos. Quia voluptates ipsa nemo aliquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, esse illum sequi veritatis cumque quaerat, repellat animi aliquam enim suscipit ipsum odit. Modi doloribus corrupti accusamus magnam qui sequi debitis.</p>

                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-md-4 mt-5">
                        <div className="card" >
                            <img src="/muni-limache-noticias.jpg" className="card-img-top img-thumbnail" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Conmemoración del día internacional de la discapacidad.</h5>
                                <p className="card-text">Agradecemos al Alcalde y al concejo municipal por hacernos parte de esta hermosa conmemoración del día internacional de la Discapacidad, donde los niños y niñas estaban dichosos de ser parte importante de esta hermosa conmemoración.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 mt-5">
                        <div className="card" >
                            <img src="/Nevados-de-chillan.jpg" className="card-img-top img-thumbnail" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Niños y niñas de residencia Villa Nuevo Caminar participaron de Olimpiadas Especiales</h5>
                                <p className="card-text">Una hermosa jornada al aire libre vivieron los niños, niñas y adolescentes de la residencia Villa Nuevo Caminar de Chillán, en el marco de las Olimpiadas Especiales que se realizaron en la región de Ñuble.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 mt-5">
                        <div className="card" >
                            <img src="/limache-sept-noticias.jpg" className="card-img-top img-thumbnail" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Celebrando nuestras fiestas patrias como se merece.</h5>
                                <p className="card-text">Niños y niñas de nuestra residencia participaron en actividades de fiestas patrias, disfrutando junto a nuestro equipo de trabajadores diferentes actividades típicas de nuestro país, agradecidos del apoyo y participación de todas las personas.</p>
                                
                            </div>
                        </div>
                    </div>

                </div>

                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-md-4 mt-5">
                        <div className="card" >
                            <img src="/limache-surf-noticias.jpg" className="card-img-top img-thumbnail" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Niños y niñas asistieron a taller de surf en Concón. </h5>
                                <p className="card-text">Nuestros niños y niñas de Residencia Nuevo Caminar asistierón a taller de surf en colaboración de la Escuela de surf Prorider en la playa la boca de Concón.</p>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 mt-5">
                        <div className="card" >
                            <img src="/mural-chillan-noticias.jpg" className="card-img-top img-thumbnail" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Actividad artística en Residencia Villa Nuevo Caminar.</h5>
                                <p className="card-text">Residencia de Chillán, Villa Nuevo Caminar realiza actividad de arte junto a los niños y niñas, haciendo un maravilloso mural en las instalaciones.</p>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 mt-5">
                        <div className="card" >
                            <img src="/limache-habilidades-noticias.jpg" className="card-img-top img-thumbnail" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Desarrollando habilidades motoras y mentales.</h5>
                                <p className="card-text">Desarrollando las habilidades de nuestros niños y niñas mediante juegos, realmente se visualizan logros y avances maravillosos, juntos creamos una vida mejor para ellos.</p>
                              
                            </div>
                        </div>
                    </div>

                </div>
                <div className="d-flex justify-content-center mt-4">
                    <Link to="/noticias" onClick={goingUp} className="btn btn-primary text-center">Ver más...</Link>
                </div>
                

            </div>

            <div className="container-fluid mt-5">
                <h2 className="text-center mb-5">Agradecemos...</h2>
                
                <p className="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam doloribus ex sed ea quo obcaecati adipisci placeat maxime tempora perspiciatis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ipsam quasi perferendis at iste, quis maxime deserunt debitis. Nulla, placeat.</p>
                <div className="row text-center mt-5 contenedor-agradecimiento py-4">
                    <div className="slider-agradecimiento1 col-3">
                        <img src="/muni-limache.png" alt="" />
                    </div>
                    <div className="slider-agradecimiento1 col-3">
                        <img src="/cruz-roja.png" className="w-100" alt="" />
                    </div>
                    <div className="slider-agradecimiento3 col-3">
                    <img src="/ccu.png" className="w-50" alt="" />
                    </div>
                    <div className="slider-agradecimiento4 col-3">
                        <img src="/santo-tomas.svg" className="w-25" alt="" />
                    </div>                    

                </div>
                

            </div>
        </>
    )
}