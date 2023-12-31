import { Route, Routes, useNavigate } from 'react-router-dom'
import { Home } from "./components/home/home";
import { useEffect } from 'react';
import { Landing } from "./components/landing/Landing"
import { GlobalStyles } from './components/globalStyles';
import { Detail } from './components/detailed/detailed';
import { Form } from './components/form/form';
function App() {
  const navigate = useNavigate()
  useEffect(()=>{
    navigate('/landing')
  }, [])
  return (
    <main className="App">
      <GlobalStyles />
      <Routes>
        <Route path='/landing' element={<Landing />} />
        <Route path='/gallery' element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/CreateDog' element={<Form />} />
      </Routes>
    </main>
  );
}

export default App;
