import Container from '../layout/Container';
import s from './PortfolioList.module.css';
import db from '../dataBase';
import GangList from '../GangList/GangList';
import StackList from '../StackList/StackList';

export default function PortfolioList() {
  return (
    <Container>
      <h2 className={s.title}>my finished work</h2>
      <p className={s.subtitle}>here is a selection of my pet-projects </p>
      <ul className={s.list}>
        {db.map(({ img, name, homePage, date, stack, gang, comment }, idx) => (
          <li key={idx} className={s.item}>
            <div className={s.imageWrapper}>
              <div className={s.overlay}>
                <h3 className={s.itemTitle}>{name}</h3>
                <span className={s.date}>{date}</span>

                <StackList stack={stack} />
                <p className={s.content}>{comment ?? comment}</p>

                {gang ? <GangList gangList={gang} /> : null}
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
        ))}
      </ul>
    </Container>
  );
}
