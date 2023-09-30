import "./index.scss";
import logo from "../../assets/logo.png";
import cartLogo from "../../assets/cartshop.svg";
import { Link } from "react-router-dom";

const HeaderMenu = () => {
  return (
    <header className="header-menu">
      <img src={logo} alt="logo" className="header-menu__logo" />
      <ul>
        <li>
          <Link to={"/home"}>Home</Link>
        </li>
        <li>Novidades</li>
        <li>Feminino</li>
        <li>Masculino</li>
        <li>Atendimento</li>
      </ul>
      <div className="header-menu__cart-shop">
        <h3>Meu Carrinho</h3>
        <img src={cartLogo} alt="cartLogo" />
      </div>
    </header>
  );
};

export default HeaderMenu;
