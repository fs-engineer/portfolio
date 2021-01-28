import Polygons from '../components/layout/Polygons';
import PortfolioList from '../components/PortfolioList/PortfolioList';

export default function PortfolioView() {
  return (
    <div>
      <section className="section">
        <Polygons color="topPolygons" />
        <PortfolioList />
        <Polygons color="bottomPolygons" />
      </section>
    </div>
  );
}
