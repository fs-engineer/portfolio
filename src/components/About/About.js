import Container from '../layout/Container';
import s from './About.module.css';
import aboutImage from '../../image/about.jpg';
import Polygons from '../layout/Polygons';

export default function About() {
  return (
    <section className={s.aboutSection}>
      <Container>
        <div className={s.aboutWrapper}>
          <div className={s.imageBlock}>
            <div className={s.aboutImage}>
              <img src={aboutImage} alt="" />
            </div>
          </div>
          <div className={s.textBlock}>
            <h2 className={s.title}>About me</h2>
            <p className={s.aboutSubscription}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              optio debitis eaque aspernatur eius reprehenderit maxime, culpa
              minus reiciendis et pariatur molestias laboriosam tempore
              cupiditate fugiat accusamus consectetur aut earum amet sit soluta
              sequi?
            </p>
            <p className={s.aboutSubscription}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
              aliquid perferendis asperiores amet eveniet, alias eius odio harum
              ipsum accusamus deserunt fugiat, voluptas suscipit eos, sit id.
              Odit rem quos animi dicta voluptatem esse ipsum inventore nihil.
            </p>
          </div>
        </div>
      </Container>
      <Polygons color={'bottomPoligons--dark'} />
    </section>
  );
}
