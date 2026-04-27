import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export default function PrivateRoute({ children }) {
    const { isAuthenticated, isLoading } = useAuth()
// <Navigate replace /> swaps the current entry in browser history instead of pushing a new one — so the back button doesn't trap the user in a redirect loop.
    if (isLoading) return <p>Loading...</p>
    if (!isAuthenticated) return <Navigate to="/login" replace/>

    return children
}