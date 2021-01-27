import ContactForm from '../components/ContactForm/ContactForm';
import Polygons from '../components/layout/Polygons';
// import Map from '../components/Map/Map';

export default function ContactsView() {
  return (
    <section className="section">
      <Polygons color="topPolygons" />
      <ContactForm />
      <Polygons color="bottomPolygons" />
    </section>
  );
}
