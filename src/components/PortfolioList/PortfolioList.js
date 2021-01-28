import Container from '../layout/Container';
import s from './PortfolioList.module.css';
import useDataBase from '../Hooks/useDataBase';
import db from '../dataBase';
import { useEffect } from 'react';

export default function PortfolioList() {
  const { dataBase, setDataBase } = useDataBase();

  useEffect(() => {
    setDataBase(db);
  }, []);

  const handleClick = dataBase => {};

  return (
    <Container>
      <h2 className={s.title}>my finished work</h2>
      <p className={s.subtitle}>here is a selection of my pet-projects </p>
      <ul className={s.list}>
        {dataBase.map(({ img, name, homePage }, idx) => (
          <li key={idx} className={s.item}>
            <div className={s.imageWrapper}>
              <div className={s.overlay}>
                <div className={s.innerOverlay}>
                  <h3 className={s.itemTitle}>{name}</h3>
                  <a
                    className={s.link}
                    href={homePage}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {homePage}
                  </a>
                  <p className={s.content}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
                    ratione, consequatur quae ipsa sed eos?
                  </p>
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
