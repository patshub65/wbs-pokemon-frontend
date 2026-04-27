import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import PokemonDetailsPage from './pages/PokemonDetailsPage'
import RosterPage from './pages/RosterPage'
import BattlePage from './pages/BattlePage'
import LeaderboardPage from './pages/LeaderboardPage'
import PrivateRoute from './components/PrivateRoute'

export default function App() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '1rem' }}>
        <Routes>
          {/* Public */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/pokemon/:id" element={<PokemonDetailsPage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />

          {/* Protected */}
          <Route path="/roster" element={
            <PrivateRoute><RosterPage /></PrivateRoute>
          } />
          <Route path="/battle" element={
            <PrivateRoute><BattlePage /></PrivateRoute>
          } />

          <Route path="*" element={<h1>404 — Not Found</h1>} />
        </Routes>
      </main>
    </>
  )
}

