import Container from '../layout/Container';
import Polygons from '../layout/Polygons';
import s from './Banner.module.css';
import { RiLinkedinFill } from 'react-icons/ri';
import { AiFillGithub } from 'react-icons/ai';

export default function Banner() {
  return (
    <section className={s.bannerSection}>
      <Polygons color={s.topPoligons} />
      <Container>
        <div className={s.bannerWrapper}>
          <h2 className={s.secondTitle}>i am vadym yevlanov</h2>

          <h1 className={s.mainTitle}>full stack developer</h1>
          <button className={s.contactBtn} type="button">
            contact me
          </button>
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

      <Polygons color={s.bottomPoligons} />
    </section>
  );
}
