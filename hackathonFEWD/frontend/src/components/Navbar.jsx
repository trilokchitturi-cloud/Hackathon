import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">

        <NavLink to="/" className="logo">
          🎓 TutorFinder
        </NavLink>

        <nav>
          <NavLink to="/">Find Tutors</NavLink>
          <NavLink to="/bookings">My Bookings</NavLink>
          <NavLink to="/admin">Admin Portal</NavLink>
          <NavLink to="/signup" className="nav-btn">
            Login / Sign Up
          </NavLink>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;