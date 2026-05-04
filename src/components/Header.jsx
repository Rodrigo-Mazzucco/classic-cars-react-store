import Navbar from "./layout/Navbar";
import './Header.css';

function Header() {
  return (
    <div className="header">
      <h1>TheseRoads</h1>
      <hr />
      <Navbar />
    </div>
  );
}

export default Header;