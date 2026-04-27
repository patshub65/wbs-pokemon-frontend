// Extract Pokémon ID from a PokeAPI URL.
// "https://pokeapi.co/api/v2/pokemon/25/" -> "25"
export function getIdFromUrl(url) {
  const match = url.match(/\/(\d+)\/?$/)
  return match ? match[1] : null
}

// Capitalize first letter — Pokémon names come back lowercase.
export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}