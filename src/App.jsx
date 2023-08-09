import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Movies from './pages/Movies'
import MoviesList from './pages/MoviesList'

function App() {

  return (
    <HashRouter className="App">
        <Routes>
          <Route path='/' element={<Movies />} />
          <Route path='/favorites' element={<MoviesList />} />
        </Routes>

    </HashRouter>
  )
}

export default App
