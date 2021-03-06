import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import ApiProvider from './context/ApiContext';
import Home from './pages/Home';
import Partido from './pages/Partido';

function App() {
  return (
    <div className="App">
      <ApiProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/:partidoId/:localId/:visitanteId/:year" element={<Partido />} />
          </Routes>
        </BrowserRouter>
      </ApiProvider>
    </div>
  );
}

export default App;
