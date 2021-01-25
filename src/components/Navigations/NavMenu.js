import s from './NavMenu.module.css';

export default function NavMenu() {
  return (
    <ul className={s.list}>
      <li className={s.item}>Домой</li>
      <li className={s.item}>Портфолио</li>
      <li className={s.item}>Обо мне</li>
      <li className={s.item}>Контакты</li>
      <li className={s.item}>Контакты</li>
    </ul>
  );
}
