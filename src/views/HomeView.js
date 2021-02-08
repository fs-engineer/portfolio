import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import MyService from '../components/MyService/MyService';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function HomeView() {
  const pathName = useLocation();
  const [aboutPosition, setAboutPosition] = useState(null);

  console.log(aboutPosition);

  useEffect(() => {
    if (pathName.hash === '#about') {
      window.scrollTo(0, 700);
    }
    if (pathName.hash === '#myservice') {
      window.scrollTo(0, 1800);
    }
  }, [pathName]);

  const getComponentPosition = component => {
    setAboutPosition(component.getBoundingClientRect());
    return;
  };

  return (
    <main>
      <Hero />
      <About getPosition={getComponentPosition} />
      <MyService />
    </main>
  );
}
