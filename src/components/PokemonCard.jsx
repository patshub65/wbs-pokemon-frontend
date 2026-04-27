import { Link } from 'react-router-dom'
import { capitalize } from '../utils/helpers'

export default function PokemonCard({ pokemon }) {
    const { id, name, sprites, types } = pokemon

    return (
        <Link
            to={`/pokemon/${id}`}
            style={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '1rem',
                textAlign: 'center',
                textDecoration: 'none',
                color: 'inherit',
                display: 'block',
                backgroundColor: '#f9f9f9',
                transition: 'transform 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
        >
            <img src={sprites.front_default} alt={name} style={{ width: '120px', height: '120px' }} />
            <h3>{capitalize(name)}</h3>
            <p style={{ fontSize: '0.9rem', color: '#555' }}>#{id.toString().padStart(3, '0')}</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
                {types.map(t => (
                    <span
                        key={t.type.name}
                        style={{
                            padding: '0.25rem 0.5rem',
                            borderRadius: '4px',
                            backgroundColor: '#eee',
                            fontSize: '0.8rem',
                            textTransform: 'capitalize',
                        }}
                    >
                        {t.type.name}
                    </span>
                ))}
            </div>
        </Link>
    )
}