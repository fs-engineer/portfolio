import Polygons from '../layout/Polygons';
import s from './MyService.module.css';
import { FaReact } from 'react-icons/fa';
import { RiCodeBoxLine } from 'react-icons/ri';
import { SiAdobephonegap, SiMaterialdesign } from 'react-icons/si';
import { GiMechaMask } from 'react-icons/gi';
import { RiDatabase2Fill } from 'react-icons/ri';

export default function MyService() {
  return (
    <section className={s.section}>
      <p className={s.titleDescription}>what can I do</p>
      <h2 className={s.sectionTitle}>my service</h2>
      <ul className={s.list}>
        <li className={s.item}>
          <h3 className={s.itemTitle}>web development</h3>
          <div className={s.imageWrapper}>
            <div className={s.imageOverlay}></div>
            <RiCodeBoxLine size="60" />
          </div>
          <p className={s.itemDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cumque
            autem eum. Eius, ea esse?
          </p>
        </li>
        <li className={s.item}>
          <h3 className={s.itemTitle}>adaptive design</h3>
          <div className={s.imageWrapper}>
            <div className={s.imageOverlay}></div>
            <SiAdobephonegap size="60" />
          </div>
          <p className={s.itemDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cumque
            autem eum. Eius, ea esse?
          </p>
        </li>

        <li className={s.item}>
          <h3 className={s.itemTitle}>React</h3>
          <div className={s.imageWrapper}>
            <div className={s.imageOverlay}></div>
            <FaReact size="60" />
          </div>
          <p className={s.itemDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cumque
            autem eum. Eius, ea esse?
          </p>
        </li>
        <li className={s.item}>
          <h3 className={s.itemTitle}>branding identity</h3>
          <div className={s.imageWrapper}>
            <div className={s.imageOverlay}></div>
            <GiMechaMask size="60" />
          </div>
          <p className={s.itemDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cumque
            autem eum. Eius, ea esse?
          </p>
        </li>
        <li className={s.item}>
          <h3 className={s.itemTitle}>Data base</h3>
          <div className={s.imageWrapper}>
            <div className={s.imageOverlay}></div>
            <RiDatabase2Fill size="60" />
          </div>
          <p className={s.itemDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cumque
            autem eum. Eius, ea esse?
          </p>
        </li>
        <li className={s.item}>
          <h3 className={s.itemTitle}>web design</h3>
          <div className={s.imageWrapper}>
            <div className={s.imageOverlay}></div>
            <SiMaterialdesign size="60" />
          </div>
          <p className={s.itemDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cumque
            autem eum. Eius, ea esse?
          </p>
        </li>
      </ul>
      <Polygons color={'bottomPolygons  '} />
    </section>
  );
}
