import stackList from '../../../dataBases/stackList';
import s from './PortfolioStackItems.module.css';

export default function PortfolioStackItems() {
  const changeStackFilter = e => {
    console.log(e.target.textContent);
  };
  return (
    <>
      <h3 className={s.title}>Select Technology:</h3>
      <ul className={s.list}>
        {Object.values(stackList).map((stack, idx) => (
          <li key={idx} onClick={changeStackFilter} className={s.listItem}>
            {stack}
          </li>
        ))}
      </ul>
    </>
  );
}
