import Home from 'pages/Home';
import Navbar from 'components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Catalog from 'pages/Catalog';

function AppRoutes() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
