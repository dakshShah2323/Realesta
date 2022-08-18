import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
import Logo from "../../img/reunion.png";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <img src={Logo} />
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              to="/quotes"
              className={({ isActive }) =>
                isActive ? "classes-active" : "none"
              }
            >
              Rent
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/new-quote"
              className={({ isActive }) =>
                isActive ? "classes.active" : "none"
              }
            >
              Buy
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/new-quote"
              className={({ isActive }) =>
                isActive ? "classes.active" : "none"
              }
            >
              Sell
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/new-quote"
              className={({ isActive }) =>
                isActive ? "classes.active" : "none"
              }
            >
              Manage Properties
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/new-quote"
              className={({ isActive }) =>
                isActive ? "classes.active" : "none"
              }
            >
              Resources
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={classes.login}>
        <div className={classes.logo}>Login</div>
        <div className={classes.logo}>Sign Up</div>
      </div>
    </header>
  );
};

export default MainNavigation;
