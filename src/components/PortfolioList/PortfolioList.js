import Container from '../layout/Container';
import s from './PortfolioList.module.css';
import useDataBase from '../Hooks/useDataBase';
import db from '../dataBase';
import { useEffect } from 'react';
import GangList from '../GangList/GangList';

export default function PortfolioList() {
  const { dataBase, setDataBase } = useDataBase();

  useEffect(() => {
    setDataBase(db);
  }, []);

  return (
    <Container>
      <h2 className={s.title}>my finished work</h2>
      <p className={s.subtitle}>here is a selection of my pet-projects </p>
      <ul className={s.list}>
        {dataBase.map(
          ({ img, name, homePage, date, stack, gang, comment }, idx) => (
            <li key={idx} className={s.item}>
              <div className={s.imageWrapper}>
                <div className={s.overlay}>
                  {/* <div className={s.innerOverlay}> */}
                  <h3 className={s.itemTitle}>{name}</h3>
                  <span className={s.date}>{date}</span>
                  <ul className={s.stackList}>
                    {Object.values(stack).map((item, idx) => (
                      <li key={idx} className={s.stackItem}>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className={s.content}>{comment}</p>
                  {/* </div> */}
                  {/* {gang ? <GangList gangList={gang} /> : console.log('no')} */}
                  <a
                    className={s.link}
                    href={homePage}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                </div>
                <img className={s.img} src={img} alt={name} />
              </div>
            </li>
          ),
        )}
      </ul>
    </Container>
  );
}
