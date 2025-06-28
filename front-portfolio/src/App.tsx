import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/init/Header";
import Home from './pages/Home';
import Cafe from "./pages/Cafe";
import WorkDetail from "./pages/WorkDetail";

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cafe" element={<Cafe />} />
        <Route path="/works/:id" element={<WorkDetail />} />
      </Routes>
    </Router>
  );
}

export default App;