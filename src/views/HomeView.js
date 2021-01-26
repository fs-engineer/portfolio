import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import MyService from '../components/MyService/MyService';

export default function HomeView() {
  return (
    <main>
      <Hero />
      <About />
      <MyService />
    </main>
  );
}
