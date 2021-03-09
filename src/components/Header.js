import Circle from "../constants/circle";
import Wave from "../constants/wave";

const Header = () => {
  return (
    <header className="page-header">
      <div className="page-header_container">
        <h2 className="page-header_logo">Count Down</h2>
        <div className="page-header_info">
          <a href="/" className="page-header_login">
            Log in
          </a>
          <a href="/" className="page-header_signup">
            Sign up
          </a>
        </div>
      </div>
      <div className="page-header_circle">
        <Circle />
      </div>
      <div className="page-header_wave">
        <Wave />
      </div>
    </header>
  );
};

export default Header;
