import { MainForm } from "./Components/CadastroProdutos";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Report } from "./Components/Formulario";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainForm />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </Router>
  );
}

export default App;
