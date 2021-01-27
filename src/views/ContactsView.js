import Polygons from '../components/layout/Polygons';
import MyContacts from '../components/MyContacts/MyContacts';
import Map from '../components/Map/Map';

export default function ContactsView() {
  return (
    <section className="section">
      <Polygons color="topPolygons" />
      <MyContacts />
      <Map />
      <Polygons color="bottomPolygons" />
    </section>
  );
}
