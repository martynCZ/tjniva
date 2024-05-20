import { Route, Routes } from 'react-router-dom';
import Homepage from "./pages/Homepage/Homepage";
import Vysledky from './pages/Vysledky/Vysledky';
import Header from './components/Header/Header';
function App() {

  return (
    <>
    <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/vysledky' element={<Vysledky />} />
      </Routes>    
    </>
  )
}

export default App
