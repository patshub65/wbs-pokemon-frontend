import axios from 'axios'

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    })

// attach JWT to every request
api.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
})

// Handle 401s globally - token might be expired or invalid, so log out the user
api.interceptors.response.use(
    response => response,
    error => {
        if (error.response && error.response.status === 401) {
            localStorage.removeItem('token')
            // force a hard redirect so AuthContext re-initializes
            window.location.href = '/login'
        }
        return Promise.reject(error)
    }
)

export default api