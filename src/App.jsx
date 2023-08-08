import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Movies from './components/Movies'
import MoviesList from './components/MoviesList'
import Prueba from './components/Prueba'

function App() {

  const favorites = useSelector(state => state.favorites);

  useEffect(() => {
    console.log(favorites);
  }, [favorites]);

  return (
    <HashRouter className="App">

        <Routes>
          <Route path='/' element={<Movies />} />
          <Route path='/favorites' element={<MoviesList />} />
          <Route path='/prueba' element={<Prueba />} />
        </Routes>

    </HashRouter>
  )
}

export default App
