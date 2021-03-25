import s from './StackList.module.css';

export default function StackList({ stack }) {
  return (
    <ul className={s.stackList}>
      {stack.map((item, idx) => (
        <li key={idx} className={s.stackItem}>
          {item}
        </li>
      ))}
    </ul>
  );
}
