import {Routes,Route, Navigate} from "react-router-dom"
import { ContactoPage } from "../pages/ContactoPage"
import { HomePage } from "../pages/HomePage"
import { NosotrosPage } from "../pages/NosotrosPage"
import { NoticiasPage } from "../pages/NoticiasPage"
import { ServiciosPage } from "../pages/ServiciosPage"


export const AppRouter = () =>{
    return(
        <>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/nosotros" element={<NosotrosPage/>}/>
            <Route path="/servicios" element={<ServiciosPage/>}/>
            <Route path="/noticias" element={<NoticiasPage/>} />
            <Route path="/contacto" element={<ContactoPage/>}/>
            
        </Routes>
        </>
    )
}