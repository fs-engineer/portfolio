import s from './Navigations.module.css';
import NavMenu from './NavMenu';

export default function Navigations() {
  return (
    <nav className={s.nav}>
      <NavMenu />
    </nav>
  );
}
