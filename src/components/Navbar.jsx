import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
        <Link to="/">Home</Link>
            <Link to="/leaderboard">Leaderboard</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/roster">Roster</Link>
        </nav>
    )
}