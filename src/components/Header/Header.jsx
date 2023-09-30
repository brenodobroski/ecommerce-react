import "./index.scss";
import dncLogo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="header">
      <img src={dncLogo} alt="" className="logo" />
    </div>
  );
};

export default Header;
