import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPokemonDetails } from '../services/pokemonService'
import { capitalize } from '../utils/helpers'


export default function PokemonDetailsPage() {
    const { id } = useParams()
    const [pokemon, setPokemon] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        let cancelled = false

        async function load() {
            try {
                setIsLoading(true)
                setError(null)
                const data = await getPokemonDetails(id)
                if (!cancelled) {
                    setPokemon(data)
                }
            } catch {
                if (!cancelled) {
                    setError('Failed to load Pokémon details. Please try again later.')
                }
            } finally {
                if (!cancelled) {
                    setIsLoading(false)
                }
            }
        }

        load()

        return () => {
            cancelled = true
        }
    }, [id])

    if (isLoading) return <p>Loading...</p>
    if (error) return <p style={{ color: 'red' }}>{error}</p>
    if (!pokemon) return <p>Pokémon not found.</p>

    return (
        <div>
            <h1>{capitalize(pokemon.name)}</h1>
            <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
            <section>
                <h2>Types</h2>
                <ul>
                    {(pokemon.types ?? []).map((t) => (
                        <li key={t.slot}>{capitalize(t.type.name)}</li>
                    ))}
                </ul>
            </section>
            <section>
                <h2>Stats</h2>
                <ul>
                    {(pokemon.stats ?? []).map((s) => (
                        <li key={s.stat.name}>
                            {s.stat.name}: {s.base_stat}
                        </li>
                    ))}
                </ul>
            </section>

            <button disabled style={{ marginTop: '1rem' }}>
                Add to Roster (coming soon)
            </button>
        </div>
    )
}
        