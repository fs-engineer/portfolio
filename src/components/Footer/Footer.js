import { RiLinkedinFill } from 'react-icons/ri';
import { AiFillGithub } from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';
import { TiSocialInstagram } from 'react-icons/ti';
import Container from '../layout/Container';
import s from './Footer.module.css';

export default function Footer() {
  return (
    <section className={s.section}>
      <Container>
        <p>Development by Vadym Yevlanov | 2021</p>
        <ul className={s.list}>
          <li className={s.socialItem}>
            <a
              href="https://www.linkedin.com/in/vadym-yevlanov/"
              target="_blank"
              rel="noreferrer"
            >
              <RiLinkedinFill size="20" />
            </a>
          </li>
          <li className={s.socialItem}>
            <a
              href="https://github.com/Google-Barma"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub size="20" />
            </a>
          </li>
          <li className={s.socialItem}>
            <a
              href="https://telegram.im/@barma_de_ley"
              target="_blank"
              rel="noreferrer"
            >
              <FaTelegramPlane size="20" />
            </a>
          </li>
          <li className={s.socialItem}>
            <a
              href="http://instagram.com/barma_de_ley"
              target="_blank"
              rel="noreferrer"
            >
              <TiSocialInstagram size="20" />
            </a>
          </li>
        </ul>
      </Container>
    </section>
  );
}
