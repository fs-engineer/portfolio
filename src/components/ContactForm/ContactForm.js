import { useState } from 'react';
import Container from '../layout/Container';
import Polygons from '../layout/Polygons';
import s from './ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'subject':
        setSubject(value);
        break;
      case 'textArea':
        setText(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e, name, email, text, subject, lastName) => {
    e.preventDefault();
    const message = { name, email, text, subject, lastName };
    console.log(message);
  };

  return (
    <section className={s.section}>
      <Polygons color="topPolygons" />
      <Container>
        <form
          className={s.form}
          onSubmit={e => handleSubmit(e, name, email, text, subject, lastName)}
        >
          <label htmlFor="name"></label>
          <input
            className={s.input}
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleChange}
          />
          <label htmlFor="lastName"></label>
          <input
            className={s.input}
            type="text"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={handleChange}
          />
          <label htmlFor="email"></label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleChange}
          />
          <label htmlFor="subject"></label>
          <input
            className={s.input}
            type="text"
            name="subject"
            id="subject"
            value={subject}
            onChange={handleChange}
          />
          <textarea
            className={s.textArea}
            name="textArea"
            id="textArea"
            cols="30"
            rows="10"
            value={text}
            onChange={handleChange}
          ></textarea>
          <button type="submit">submit</button>
        </form>
      </Container>
      <Polygons color="bottomPolygons" />
    </section>
  );
}
