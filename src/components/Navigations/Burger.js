import s from './Burger.module.css';

export default function Burger({ onOpenMenu }) {
  return (
    <div className={s.burger}>
      <button
        className={s.button}
        type="button"
        onClick={() => onOpenMenu(true)}
      >
        <span></span>
      </button>
    </div>
  );
}
