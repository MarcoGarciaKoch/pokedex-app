
import './App.css';
import PokeList from './Pages/Home/Components/PokeList';
import Contact from './Pages/Contact';
import Details from './Pages/Details';
import NotFound from './Pages/NotFound';
import {BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <main className='app'>
    <BrowserRouter>
      <Routes>
        <Route path="/pokedex-app" element={<PokeList />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Navigate to="/pokedex-app" replace />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </main>
  );
}

export default App;
