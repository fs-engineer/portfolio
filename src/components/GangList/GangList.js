import s from './GangList.module.css';
export default function GangList({ gangList }) {
  return (
    <ul className={s.list}>
      {gangList.map(({ name, url }) => (
        <li key={name} className={s.item}>
          <a className={s.link} href={url} target="_blank" rel="noreferrer">
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
}
