import axios from 'axios'

const authApi = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
})

export async function register({ email, password, username }) {
    const response = await authApi.post('/auth/register', { email, password, username })
    return response.data
}

export async function login({ email, password }) {
    const response = await authApi.post('/auth/login', { email, password })
    return response.data // expected shape: { token: '...' }

}

