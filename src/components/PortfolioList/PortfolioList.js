import Container from '../layout/Container';
import PortfolioItems from './PortfolioItems';
import s from './PortfolioList.module.css';
import db from '../../dataBases/dataBase';
import PortfolioStackListItems from './PortfolioStackItems/PortfolioStackItems';

export default function PortfolioList() {
  return (
    <Container>
      <h2 className={s.title}>my finished work</h2>
      <p className={s.subtitle}>here is a selection of my pet-projects </p>
      <PortfolioStackListItems />
      <PortfolioItems listData={db} />
    </Container>
  );
}
