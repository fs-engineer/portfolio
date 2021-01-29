import s from './GangList.module.css';
export default function GangList({ gangList }) {
  return (
    <ul className={s.list}>
      {gangList.map(({ name, url }) => (
        <li>
          <a
            className={s.link}
            href={url}
            key={name}
            target="_blank"
            rel="noreferrer"
          >
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
}
