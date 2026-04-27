import { useEffect, useState } from 'react'
import { getPokemonListWithDetails } from '../services/pokemonService'
import PokemonCard from '../components/PokemonCard'

export default function HomePage() {
    const [pokemon, setPokemon] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    // Fetch the first 20 Pokémon with details on component mount
    
    useEffect(() => {
        let cancelled = false
        // Fetch Pokémon list and details
        async function load() {
            try {
                setIsLoading(true)
                setError(null)
                const data = await getPokemonListWithDetails({ limit: 20, offset: 0 })
                if (!cancelled) {
                    const results = Array.isArray(data) ? data : data?.results ?? []
                    setPokemon(results)
                }
            } catch (err) {
                if (!cancelled) {
                    setError('Failed to load Pokémon. Please try again later.')
                }
            } finally {
                if (!cancelled) {
                    setIsLoading(false)
                }
            }
        }

        load()
        return () => { cancelled = true } // cleanup function to prevent state updates if component unmounts
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (error) return <p style={{ color: 'red' }}>{error}</p>

    return (
        <div>
            <h1>Pokédex</h1>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
                    gap: '1rem',
                    marginTop: '1rem',
                }}
            >
                {pokemon.map((p) => (
                    <PokemonCard key={p.id} pokemon={p} />
                ))}
            </div>
        </div>
    )
}