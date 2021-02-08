import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import MyService from '../components/MyService/MyService';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function HomeView() {
  const pathName = useLocation();

  useEffect(() => {
    if (pathName.hash === '#about') {
      window.scrollTo(0, 700);
    }
    if (pathName.hash === '#myservice') {
      window.scrollTo(0, 1800);
    }
  }, [pathName]);

  return (
    <main>
      <Hero />
      <About />
      <MyService />
    </main>
  );
}
