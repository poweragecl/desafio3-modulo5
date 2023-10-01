import { Link } from "react-router-dom"


export const Home = () => {
    return(
        <>
            <h1>Pokémon getto da ze!</h1>
            
            <img className="red-walking" src="../src/assets/red-walking.gif" alt="red" />

            <Link to="/pokemon" className="btn-start"> Let&apos;s Start</Link>

        </>
    )
}

