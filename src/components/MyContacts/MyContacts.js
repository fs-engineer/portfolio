import Address from '../Address/Address';
import ContactForm from '../ContactForm/ContactForm';
import Container from '../layout/Container';
import s from './MyContacts.module.css';

export default function Contacts() {
  return (
    <Container>
      <div className={s.wrapper}>
        <Address />
        <ContactForm />
      </div>
    </Container>
  );
}
