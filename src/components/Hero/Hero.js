import Container from '../layout/Container';
import Polygons from '../layout/Polygons';
import s from './Hero.module.css';
import { RiLinkedinFill } from 'react-icons/ri';
import { AiFillGithub } from 'react-icons/ai';
import slideImage from '../../image/slide.jpg';

export default function Hero() {
  return (
    <section className={s.heroSection}>
      <Polygons color={'topPoligons'} />
      <Container>
        <div className={s.heroTextWrapper}>
          <h2 className={s.secondTitle}>i am vadym yevlanov</h2>

          <h1 className={s.mainTitle}>full stack developer</h1>
          <button className={s.contactBtn} type="button">
            contact me
          </button>
        </div>
        <div className={s.heroSlideImage}>
          <img src={slideImage} alt="" />
        </div>
        <div className={s.socialLink}>
          <ul>
            <li></li>
            <li>
              <a href="https://www.linkedin.com/in/vadym-yevlanov/">
                <RiLinkedinFill />
              </a>
            </li>
          </ul>

          <a href="https://github.com/Google-Barma">
            <AiFillGithub />
          </a>
        </div>
        <div className={s.speciality}>
          <p>frontend and backend developer</p>
        </div>
      </Container>

      <Polygons color={'bottomPoligons'} />
    </section>
  );
}
