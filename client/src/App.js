import { Route, Routes } from 'react-router-dom'
import { Home } from "./components/home/home";
import { Nav } from './components/nav/nav';
function App({ location }) {

  return (
    <main className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
