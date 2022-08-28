import "./App.scss";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Work from "./pages/Work";
import Culture from "./pages/Culture";
import Services from "./pages/Services";
import Insights from "./pages/Insights";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Header from "./components/Header/Header";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>

        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/services" element={<Services />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
