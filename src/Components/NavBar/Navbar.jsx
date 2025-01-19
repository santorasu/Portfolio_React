
import './Navbar.css';
// import logo from '../../assets/logo.png'

const Navbar = () => {
    return (
        <div className='navbar'>
          {/* <img src={logo} alt="" />   */}
          <p className='logo'>Santo.</p>
          <ul className="nav-menu">
                <li className="nav-item">Home</li>
                <li className="nav-item">About Me</li>
                <li className="nav-item">Services</li>
                <li className="nav-item">Portfolio</li>
                <li className="nav-item">Contact</li>
          </ul>
          <div className="nav-connect">Connect With Me</div>
        </div>
    );
};

export default Navbar;