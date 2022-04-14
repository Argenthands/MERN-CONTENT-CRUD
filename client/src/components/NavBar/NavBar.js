import { NavLink } from "react-router-dom"
import './NavBar.css'

export function NavBar() {
    return (
        <nav className='NavBar'>
            <NavLink className={({ isActive }) => isActive ? 'active' : 'Button__Menu'} to={'/'}>Inicio</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'active' : 'Button__Menu'} to={'/new'}>Formulario</NavLink>
        </nav>
    )
}
