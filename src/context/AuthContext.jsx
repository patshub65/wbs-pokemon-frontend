import { createContext, useState, useEffect } from 'react'

export const AuthContext = createContext(null)

export function AuthProvider({ children }) {
    const [token, setToken] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    // On mount, check localStorage for an existing token
    useEffect(() => {
        const storedToken = localStorage.getItem('token')
        if (storedToken) {
            setToken(storedToken)
        }
        setIsLoading(false)
    }, [])
// Whenever the token changes, update localStorage
    function login(newToken) {
        localStorage.setItem('token', newToken)
        setToken(newToken)
    }
// Clear token from state and localStorage on logout
    function logout() {
        localStorage.removeItem('token')
        setToken(null)
    }
// The value provided to context consumers
    const value = {
        token,
        isAuthenticated: !!token,
        isLoading,
        login,
        logout
    }
// Don't render children until we've checked localStorage
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
