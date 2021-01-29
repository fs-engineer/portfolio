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
              <img className={s.img} src={aboutImage} alt="" />
            </div>
          </div>
          <div className={s.textBlock}>
            <h2 className={s.title} id="about">
              About Me
            </h2>
            <p className={s.aboutSubscription}>
              I am a Web Developer located in Zhytomyr, Ukraine. I like
              to resolve design problems, create smart user interface
              and imagine useful interaction, developing rich web experiences
              & web applications.
            </p>
            <p className={s.aboutSubscription}>
              I like to turn complex tasks into simple, beautiful and intuitive
              designs. When I don't code or click on the pixels, you'll find me
              scampering through the woods with a toy gun, sleeping in a tent in
              winter, rafting with friends on the river, or just frying steaks
              with my family in my yard.
            </p>
            <button type="button" className="button">
              download cv
            </button>
          </div>
        </div>
      </Container>
      <Polygons color={'bottomPolygons--dark'} />
    </section>
  );
}
