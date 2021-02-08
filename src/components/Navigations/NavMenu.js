import s from './NavMenu.module.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import homeImg from '../../image/nav-menu/home.jpg';
import aboutImg from '../../image/nav-menu/about.jpg';
import myServiceImg from '../../image/nav-menu/my-service.jpg';
import contactsImg from '../../image/nav-menu/contacts.jpg';
import portfolioImg from '../../image/nav-menu/portfolio.jpg';
import useWindowSize from '../Hooks/useWindowSize';

export default function NavMenu({ onOpenMenu, isOpen }) {
  const windowSize = useWindowSize();

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
    <div
      className={
        isOpen
          ? s.menuOverlay
          : setTimeout(() => {
              return s.menuOverlayClose;
            }, 300)
      }
      onClick={() => onOpenMenu(false)}
    >
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
            <NavLink to="/" onClick={() => onOpenMenu(false)}>
              <div className={s.imgWrapper}>
                <div
                  className={
                    windowSize.width < 769 ? s.mobileOverlay : s.imgOverlay
                  }
                >
                  <p className={s.menuText}>home</p>
                </div>
                <img src={homeImg} alt="home" />
              </div>
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink to="/portfolio" onClick={() => onOpenMenu(false)}>
              <div className={s.imgWrapper}>
                <div
                  className={
                    windowSize.width < 769 ? s.mobileOverlay : s.imgOverlay
                  }
                >
                  <p className={s.menuText}>portfolio</p>
                </div>
                <img src={portfolioImg} alt="portfolio" />
              </div>
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink to="/#about" onClick={() => onOpenMenu(false)}>
              <div className={s.imgWrapper}>
                <div
                  className={
                    windowSize.width < 769 ? s.mobileOverlay : s.imgOverlay
                  }
                >
                  <p className={s.menuText}>about</p>
                </div>
                <img src={aboutImg} alt="about" />
              </div>
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink to="/#myservice" onClick={() => onOpenMenu(false)}>
              <div className={s.imgWrapper}>
                <div
                  className={
                    windowSize.width < 769 ? s.mobileOverlay : s.imgOverlay
                  }
                >
                  <p className={s.menuText}>my service</p>
                </div>
                <img src={myServiceImg} alt="my service" />
              </div>
            </NavLink>
          </li>

          <li className={s.item}>
            <NavLink to="/contacts" onClick={() => onOpenMenu(false)}>
              <div className={s.imgWrapper}>
                <div
                  className={
                    windowSize.width < 769 ? s.mobileOverlay : s.imgOverlay
                  }
                >
                  <p className={s.menuText}>contacts</p>
                </div>
                <img src={contactsImg} alt="contacts" />
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
