import s from './NavMenu.module.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import homeImg from '../../image/nav-menu/home.jpg';
import aboutImg from '../../image/nav-menu/about.jpg';
import myServiceImg from '../../image/nav-menu/my-service.jpg';

export default function NavMenu({ onOpenMenu, isOpen }) {
  useEffect(() => {
    const handleCloseMenu = e => {
      if (e.code === 'Escape') {
        onOpenMenu(false);
      }
    };

    window.addEventListener('keydown', handleCloseMenu);
    return () => {
      window.removeEventListener('keydown', handleCloseMenu);
    };
  });

  return (
    <div className={isOpen ? `${s.menuOpen}` : `${s.menuClose}`}>
      <button
        className={s.closeBtn}
        type="button"
        onClick={() => onOpenMenu(false)}
      >
        <AiOutlineCloseCircle />
      </button>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink to="/">
            <div className={s.imgWrapper}>
              <div className={s.imgOverlay}>
                <p className={s.menuText}>home</p>
              </div>
              <img src={homeImg} alt="home" />
            </div>
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/portfolio">Porfolio</NavLink>
        </li>
        <li className={s.item}>
          <div className={s.imgWrapper}>
            <div className={s.imgOverlay}>
              <p className={s.menuText}>about</p>
            </div>
            <img src={aboutImg} alt="about" />
          </div>
        </li>
        <li className={s.item}>
          <div className={s.imgWrapper}>
            <div className={s.imgOverlay}>
              <p className={s.menuText}>my service</p>
            </div>
            <img src={myServiceImg} alt="my service" />
          </div>
        </li>

        <li className={s.item}>
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
      </ul>
    </div>
  );
}
