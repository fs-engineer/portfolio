import s from './Layout.module.css';

export default function AppWrapper({ children }) {
  return (
    <div className={s.wrapper}>
      <div className={s.lines}></div>
      {children}
    </div>
  );
}
