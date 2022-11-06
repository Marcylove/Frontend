import {Route,  Routes} from "react-router-dom"
import Error from "./components/Error";
import Index from "./pages/Index";
import RegistroC from "./components/RegistroC"
import InicioSC from "./components/InicioSC";
import RegistroP from "./components/RegistroP"
import InicioSP from "./components/InicioSP";
import Formularios from "./components/Formularios";


export default function App() {
    return (
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="*" element={<Error />} />
                <Route path="registroC" element={<RegistroC />} />
                <Route path="inicioSesionC" element={<InicioSC />} />
                <Route path="registroP" element={<RegistroP />} />
                <Route path="inicioSesionP" element={<InicioSP />} />
                <Route path="formularios" element={<Formularios />} />
            </Routes>
    )   
}