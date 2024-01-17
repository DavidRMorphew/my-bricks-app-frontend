import { NavLink } from "react-router-dom";

const NavBar = () => {
  const link = {
    padding: "12px",
    margin: "0 6px 6px",
    background: "teal",
    textDecoration: "none",
    color: "white",
    display: "flex",
    justifyContent: "center",
    flex: 1,
  };

  return (
    <div className="navbar">
      <NavLink
        to="/"
        exact
        style={link}
        activeStyle={{
          background: "lightgreen",
          color: "black",
        }}
      >
        About
      </NavLink>
      <NavLink
        exact
        to="/lego_sets"
        style={link}
        activeStyle={{
          background: "lightgreen",
          color: "black",
        }}
      >
        Search
      </NavLink>
      <NavLink
        exact
        to="/lego_sets/owned"
        style={link}
        activeStyle={{
          background: "lightgreen",
          color: "black",
        }}
      >
        Owned
      </NavLink>
      <NavLink
        exact
        to="/lego_sets/potential_builds"
        style={link}
        activeStyle={{
          background: "lightgreen",
          color: "black",
        }}
      >
        Builds
      </NavLink>
    </div>
  );
};

export default NavBar;
