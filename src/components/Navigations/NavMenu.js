import s from './NavMenu.module.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useEffect } from 'react';

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
        <li className={s.item}>Home</li>
        <li className={s.item}>Porfolio</li>
        <li className={s.item}>About me</li>
        <li className={s.item}>Contacts</li>
      </ul>
    </div>
  );
}
