import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return(
        <div className="App-header">
            <h1>My Bricks</h1>
            <NavLink
                to="/about"
                exact
            >
                About
            </NavLink>
            <NavLink
                to="/lego_sets"
                // need to be exact? Probably not for nested routes or show
            >
                All Lego Sets
            </NavLink>
        </div>
    )
}

export default NavBar