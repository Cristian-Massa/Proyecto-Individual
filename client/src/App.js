import { Route, Routes } from 'react-router-dom'
import { Home } from "./components/home/home";
function App() {

  return (
    <main className="App">
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
