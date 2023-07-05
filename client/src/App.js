import { Route, Routes } from 'react-router-dom'
import { Home } from "./components/home/home";
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { changePag } from './redux/actions/actions';
function App({ location }) {

const dispatch = useDispatch()

useEffect(()=>{
  axios.get(`http://localhost:3001/dog/name?breed_group=`)
  .then(res =>res.data)
  .then(data => {
      console.log(data)
      dispatch(changePag(data))
  })
}, [])
  return (
    <main className="App">
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
