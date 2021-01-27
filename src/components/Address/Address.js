import Container from '../layout/Container';
import s from './Address.module.css';

export default function Address() {
  return (
    <Container>
      <address className={s.address}>
        <h2 className={s.title}>my contacts</h2>
        <p className={s.subscription}>
          Are you working on something great? I would love to help make it
          happen! Drop me a letter and start your project right now!
          <span className={s.justDoIt}> Just do it.</span>
        </p>
        <h3 className={s.subTitle}>Address</h3>
        <p className={s.text}>Ukraine, Zhytomyr</p>
        <h3 className={s.subTitle}>phone</h3>
        <p className={s.text}>
          <a href="tel:+38(063)-070-70-70">+38(063)-070-70-70</a>
        </p>
        <h3 className={s.subTitle}>email</h3>
        <p className={s.text}>
          <a href="mailto: vadym.yevlanov@gmail.com">
            vadym.yevlanov@gmail.com
          </a>
        </p>
      </address>
    </Container>
  );
}
