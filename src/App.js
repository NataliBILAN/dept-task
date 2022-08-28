import "./App.scss";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Work from "./pages/Work";
import Culture from "./pages/Culture";
import Services from "./pages/Services";
import Insights from "./pages/Insights";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import NotFound from "./pages/404";
import Header from "./components/Header/Header";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import RouterPathEnum from "./enums/RouterPathEnum";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <ScrollToTop />
      <Routes>
        <Route path={RouterPathEnum.Home} element={<Home />} />
        <Route path={RouterPathEnum.Work} element={<Work />} />
        <Route path={RouterPathEnum.Culture} element={<Culture />} />
        <Route path={RouterPathEnum.Services} element={<Services />} />
        <Route path={RouterPathEnum.Insights} element={<Insights />} />
        <Route path={RouterPathEnum.Careers} element={<Careers />} />
        <Route path={RouterPathEnum.Contact} element={<Contact />} />
        <Route path={RouterPathEnum.NotFound} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
