import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Comenzar } from '../pages/Comenzar';
import Proveedores from '../pages/Proveedores';
import Compradores from '../pages/Compradores';
import Suscripciones from '../pages/Suscripciones';
import VocesDelCampo from '../pages/recursos/VocesDelCampo';
import ComoFunciona from '../pages/recursos/ComoFunciona';
import CasosDeUso from '../pages/recursos/CasosDeUso';
import SobreNosotros from '../pages/recursos/SobreNosotros';
import FaqGeneral from '../pages/recursos/FaqGeneral';
import NotFound from '../pages/NotFound';
import { ScrollToTop } from '../components/utils/ScrollToTop';

export const AppRouter = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comofunciona" element={<ComoFunciona />} />
        <Route path="/proveedores" element={<Proveedores />} />
        <Route path="/compradores" element={<Compradores />} />
        <Route path="/suscripciones" element={<Suscripciones />} />
        <Route path="/comenzar" element={<Comenzar />} />
        
        {/* Rutas de Recursos (Persona 4) */}
        <Route path="/recursos/voces-del-campo" element={<VocesDelCampo />} />
        <Route path="/recursos/como-funciona" element={<ComoFunciona />} />
        <Route path="/recursos/casos-de-uso" element={<CasosDeUso />} />
        <Route path="/recursos/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/recursos/faq" element={<FaqGeneral />} />

        {/* Ruta 404 Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};