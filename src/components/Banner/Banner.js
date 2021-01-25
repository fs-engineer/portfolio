import { useState } from 'react';
import Polygons from '../layout/Polygons';
import s from './Banner.module.css';

export default function Banner() {
  return (
    <section className={s.bannerSection}>
      <Polygons color={s.topPoligons} />
      <div className={s.bannerWrapper}>
        <h2 className={s.secondTitle}>I AM VADYM YEVLANOV</h2>

        <h1 className={s.mainTitle}>full stack developer</h1>
        <button className={s.contactBtn} type="button">
          contact me
        </button>
      </div>
      <Polygons color={s.bottomPoligons} />
    </section>
  );
}
