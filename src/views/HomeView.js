import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import MyService from '../components/MyService/MyService';
import { Route, Switch } from 'react-router-dom';

export default function HomeView() {
  return (
    <main>
      <Hero />
      <About />
      <MyService />
    </main>
  );
}
