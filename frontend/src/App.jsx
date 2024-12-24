import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detalhes from './pages/Detalhes';
import Produtos from './pages/Produtos';
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalhes/:inputValue" element={<Detalhes />} />
        <Route path="/detalhes/" element={<Detalhes />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
