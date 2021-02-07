import s from './Logo.module.css';
import logo from '../../image/svg/logo-light.svg';
import { NavLink } from 'react-router-dom';

export default function Logo() {
  return (
    <NavLink to="/">
      <div className={s.logo}>
        <img className={s.logoImage} src={logo} alt="logo" />
      </div>
    </NavLink>
  );
}
