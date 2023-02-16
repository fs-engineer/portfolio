import GangList from '../GangList/GangList';
import StackList from '../StackList/StackList';

import s from './PortfolioList.module.css';

function PortfolioItems({ listData }) {
  return (
    <ul className={s.list}>
      {listData.map(
        ({ img, name, homePage, date, stack, gang, comment }, idx) => (
          <li key={idx} className={s.item}>
            <div className={s.imageWrapper}>
              <div className={s.overlay}>
                <div>
                  <h3 className={s.itemTitle}>{name}</h3>
                  <span className={s.date}>{date}</span>

                  <StackList stack={stack} />

                  <p className={s.content}>{comment ?? comment}</p>

                  {gang ? <GangList gangList={gang} /> : null}
                </div>

                <div className={s.btnWrap}>
                  <a
                    className="button"
                    href={homePage}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                </div>
              </div>
              <img className={s.img} src={img} alt={name} />
            </div>
          </li>
        ),
      )}
    </ul>
  );
}

export default PortfolioItems;
