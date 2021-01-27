import Polygons from '../components/layout/Polygons';

export default function PortfolioView() {
  return (
    <div>
      <section className="section">
        <Polygons color="topPolygons" />
        <Polygons color="bottomPolygons" />
      </section>
    </div>
  );
}
