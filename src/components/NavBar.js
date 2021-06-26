import { NavLink } from 'react-router-dom'

const NavBar = () => {

    const link = {
        width: '100px',
        padding: '12px',
        margin: '0 6px 6px',
        background: 'teal',
        textDecoration: 'none',
        color: 'white',
      }

    return(
        <div>
            
            <NavLink
                to="/about"
                exact
                style={link}
                activeStyle={{
                    background: "lightgreen",
                    color: "black"
                }}
            >
                About
            </NavLink>
            <NavLink
                to="/lego_sets"
                // need to be exact? Probably not for nested routes or show
                style={link}
                activeStyle={{
                    background: "lightgreen",
                    color: "black"
                }}            >
                Lego Sets
            </NavLink>
        </div>
    )
}

export default NavBar