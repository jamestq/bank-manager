import './NavBar.css'

import { NavLink } from 'react-router-dom'

export default function NavBar(){
    return(
        <nav>
            <ul>
                <li><NavLink to="">Account Home</NavLink></li>
                <li><NavLink to="expenditure">Expenditure</NavLink></li>
                <li><NavLink to="login">Change Account</NavLink></li>
            </ul>
        </nav>
    )
}