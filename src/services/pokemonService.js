import axios from 'axios'

const pokeAPI = axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
})

// fetch paginated list of Pokemon
export async function getPokemonList({ limit = 20, offset = 0 } = {}) {
    const response = await pokeAPI.get('/pokemon', { params: { limit, offset } })
    return response.data
}

// fetch details for a single Pokemon by name or ID
export async function getPokemonDetails(identifier) {
    const response = await pokeAPI.get(`/pokemon/${identifier}`)
    return response.data
}

// fetch a list with full details (used by HomePage so cards have images and types)
export async function getPokemonListWithDetails({ limit = 20, offset = 0 } = {}) {
    const list = await getPokemonList({ limit, offset })
    const detailed = await Promise.all( // Promise.all parallelizes them so the user waits for the slowest one, not the sum of all of them.
        list.results.map(p => getPokemonDetails(p.name))
    )
    return detailed
}


