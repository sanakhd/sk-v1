import { Navbar, Nav } from "rsuite";
import "../styles/CustomNavbar.css";
import logo from "../images/logo.ico";

const CustomNavbar = () => {
  return (
    <div className="navbar">
      <Nav appearance="subtle">
        <Navbar>
          <Navbar.Brand className="navbar-logo">
            <img src={logo} alt="Logo" className="navbar-logo" />
          </Navbar.Brand>
          <Nav className="navbar-items">
            <Nav.Item>about&nbsp;&nbsp;&nbsp;&nbsp;</Nav.Item>
            <Nav.Item>projects&nbsp;&nbsp;&nbsp;&nbsp;</Nav.Item>
            <Nav.Item>work&nbsp;&nbsp;&nbsp;&nbsp;</Nav.Item>
            <Nav.Item>contact&nbsp;&nbsp;&nbsp;&nbsp;</Nav.Item>
          </Nav>
        </Navbar>
      </Nav>
    </div>
  );
};
export default CustomNavbar;
