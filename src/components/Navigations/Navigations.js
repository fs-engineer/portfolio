import Burger from './Burger';
import s from './Navigations.module.css';
import NavMenu from './NavMenu';
import Container from '../layout/Container';
import { useState } from 'react';
import Logo from '../Logo/Logo';

export default function Navigations() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className={s.header}>
      <Container>
        <nav className={s.nav}>
          <div className={s.fixedLayer}>
            <Logo />
            <NavMenu onOpenMenu={setIsOpen} isOpen={isOpen} />
            <Burger onOpenMenu={setIsOpen} isOpen={isOpen} />
          </div>
        </nav>
      </Container>
    </header>
  );
}
