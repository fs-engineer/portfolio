import { NavLink } from 'react-router-dom';
import Container from '../layout/Container';
import Polygons from '../layout/Polygons';
import s from './Hero.module.css';
import { RiLinkedinFill } from 'react-icons/ri';
import { AiFillGithub } from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';
import { TiSocialInstagram } from 'react-icons/ti';
import slideImage from '../../image/slide.jpg';

export default function Hero() {
  return (
    <section className={s.heroSection}>
      <Polygons color={'topPolygons'} />
      <Container>
        <div className={s.heroTextWrapper}>
          <h2 className={s.secondTitle}>i am vadym yevlanov</h2>
          <h1 className={s.mainTitle}>full-stack web developer</h1>
          <NavLink className="button" type="NavLink" to="/contacts">
            contact me
          </NavLink>
        </div>
        <div className={s.heroSlideImage}>
          <img src={slideImage} alt="" />
        </div>
        <div className={s.socialLink}>
          <ul>
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
                href="https://github.com/fs-engineer"
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
        </div>
        <div className={s.speciality}>
          <p>frontend and backend developer</p>
        </div>
      </Container>

      <Polygons color={'bottomPolygons'} />
    </section>
  );
}
