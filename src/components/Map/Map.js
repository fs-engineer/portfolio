import Container from '../layout/Container';
import s from './Map.module.css';

export default function Map() {
  return (
    <Container>
      <div className={s.wrapper}>
        <iframe
          className={s.map}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40804.60777144963!2d28.638698260742828!3d50.26788118924781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472c64a32bfa355d%3A0xf14ad2a3d9b9e229!2z0JbQuNGC0L7QvNC40YAsINCW0LjRgtC-0LzQuNGA0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDEwMDAw!5e0!3m2!1sru!2sua!4v1611756191367!5m2!1sru!2sua"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
          width="1200"
          height="450"
          title="google-map"
        ></iframe>
      </div>
    </Container>
  );
}
