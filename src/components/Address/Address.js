import Container from '../layout/Container';
import s from './Address.module.css';

export default function Address() {
  return (
    <Container>
      <address className={s.address}>
        <h2 className={s.title}>my contacts</h2>
        <p className={s.subscription}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          natus ab sunt quam et assumenda.
        </p>
        <h3 className={s.subTitle}>Address</h3>
        <p className={s.text}>Ukraine, Zhytomyr</p>
        <h3 className={s.subTitle}>phone</h3>
        <p className={s.text}>+38(063)-070-70-70</p>
        <h3 className={s.subTitle}>email</h3>
        <p className={s.text}>vadym.yevlanov@gmail.com</p>
      </address>
    </Container>
  );
}
