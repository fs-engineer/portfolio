import s from './AppWrapper.module.css';

export default function AppWrapper({ children }) {
  return <div className={s.wrapper}>{children}</div>;
}
