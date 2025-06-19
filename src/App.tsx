
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import MisionVision from "@/pages/MisionVision";
import ResponsabilidadSocial from "@/pages/ResponsabilidadSocial";
import Valores from "@/pages/Valores";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/mision-vision" element={<MisionVision />} />
        <Route path="/responsabilidad-social" element={<ResponsabilidadSocial />} />
        <Route path="/valores" element={<Valores />} />
      </Routes>
    </Router>
  );
}

export default App;
