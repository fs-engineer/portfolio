import Polygons from '../layout/Polygons';
import s from './MyService.module.css';
import { serviceData } from '../../assets/myServiceData';

export default function MyService() {
  return (
    <section className={s.section} id="myService">
      <p className={s.titleDescription}>what can I do</p>
      <h2 className={s.sectionTitle}>my service</h2>
      <ul className={s.list}>
        {serviceData.map(({ title, icon, description }) => (
          <li key={title} className={s.item}>
            <h3 className={s.itemTitle}>{title}</h3>
            <div className={s.imageWrapper}>
              <div className={s.imageOverlay}></div>
              {icon}
            </div>
            <p className={s.itemDescription}>{description}</p>
          </li>
        ))}
      </ul>
      <Polygons color={'bottomPolygons'} />
    </section>
  );
}
