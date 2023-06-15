import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// import Pages
import Home from './Pages/Home';
import NowPlaying from './Pages/NowPlaying';
import Popular from './Pages/Popular';
import TopRated from './Pages/TopRated';
import Upcoming from './Pages/UpComing';
import './App.css';

const App = () => {

  return (
    <>
      <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/now-playing' element={<NowPlaying />} />
        <Route path='/popular' element={<Popular />} />
        <Route path='/top-rated' element={<TopRated />} />
        <Route path='/up-coming' element={<Upcoming />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
