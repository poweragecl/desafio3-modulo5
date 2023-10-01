import {NavLink } from "react-router-dom"

export const Menu = () => {

    const setActiveClass = ({isActive}) => (isActive ? "active" : undefined);

    return(
        <>
            <nav className="main-menu">
                <NavLink className={setActiveClass} to="/" >Home</NavLink>
                <NavLink className={setActiveClass} to="/pokemon">Pokémon</NavLink>
            </nav>
        </>
    )
}