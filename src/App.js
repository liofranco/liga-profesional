import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ApiProvider from './context/ApiContext';
import Home from './pages/Home';
import Clubes from './pages/Clubes';
import Tabla from './pages/Tabla';
import Fixture from './pages/Fixture';
import Noticias from './pages/Noticias';
import Video from './pages/Video';
import Partido from './pages/Partido';
import ScrollToTop from './components/ScrollToTop';
import Noticia from './pages/Noticia';

function App() {
  return (
    <div className="App">
      <ApiProvider>
        <BrowserRouter>
          <Header />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clubes" element={<Clubes />} />
            <Route path="/fixture" element={<Fixture />} />
            <Route path="/tabla" element={<Tabla />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/notas/:section/:year/:month/:day/:post" element={<Noticia />} />
            <Route path="/videos/:videoId" element={<Video />} />
            <Route exact path="/:partidoId/:localId/:visitanteId/" element={<Partido />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ApiProvider>
    </div>
  );
}

export default App;
