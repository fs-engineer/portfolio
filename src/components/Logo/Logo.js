import s from './Logo.module.css';
import logo from '../../image/svg/logo.svg';

export default function Logo() {
  return (
    <div className={s.logo}>
      <img className={s.logoImage} src={logo} alt="logo" />
    </div>
  );
}
