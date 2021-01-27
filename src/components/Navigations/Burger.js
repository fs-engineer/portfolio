import s from './Burger.module.css';

export default function Burger({ onOpenMenu, isOpen }) {
  return (
    <div className={s.burger}>
      <button
        className={s.button}
        type="button"
        onClick={() => onOpenMenu(!isOpen)}
      >
        <span className={s.line}></span>
      </button>
    </div>
  );
}
