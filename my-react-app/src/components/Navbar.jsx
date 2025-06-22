import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {



  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    dispatch(valt());
    navigate("/Belepes");
  };

  return (
    <div className="Navbar">
      <div className="wrapper">
        <div className="right">
          <Link to="/" className="logo">
            AssistedPro
          </Link>
        </div>
        <div className="left">
          <Link to="/">Kezdőlap</Link>
          <Link to="/Kotveny">Kötvény</Link>
          <Link to="/Reszveny">Részvény</Link>
          <Link to="/Kripto">Kriptovaluta</Link>
          <Link to="/Belepes">Belépés</Link>
          <Link to="/Regis">Regisztráció</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
