import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import PokemonDetailsPage from './pages/PokemonDetailsPage'
import RosterPage from './pages/RosterPage'
import BattlePage from './pages/BattlePage'
import LeaderboardPage from './pages/LeaderboardPage'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <main style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/pokemon/:id" element={<PokemonDetailsPage />} />
          <Route path="/roster" element={<RosterPage />} />
          <Route path="/battle" element={<BattlePage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
        </Routes>
      </main>
    </>
  )
}

export default App;
