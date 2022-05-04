import styles from '../styles/containers.module.css';

import TeamPlaatje from '../public/plaatjes/team.svg';
import AccessibilityPlaatje from '../public/plaatjes/accessibility.svg';
import DevelopmentPlaatje from '../public/plaatjes/development.svg';
import Lely from '../public/plaatjes/lely.svg';
import { Navigatie } from '../components/navigatie';
import { Footer } from '../components/footer';
import { Projectkaart } from '../components/projectkaart';
import { Verhaalkaart } from '../components/verhaalkaart';

export default () => {
  return (
    <>
      <Navigatie />

      <main className={styles.container}>
        <h1>Hi, ik ben Julian. Student aan de Haagse Hogeschool</h1>
        <section className={styles.cardContainer}>
          {/* <Projectkaart
            titel="Lely"
            beschrijving="Development"
            Plaatje={Lely}
            paginaUrl="/projecten/lely"
          />
          <Projectkaart
            titel="Lely"
            beschrijving="Development"
            Plaatje={Lely}
            paginaUrl="/projecten/lely"
          /> */}

          <Verhaalkaart Plaatje={Lely}>
            <h2>Accessibility First</h2>
            <p>Meer over de accessibility</p>
            <img src="" />
          </Verhaalkaart>
        </section>
        <Footer />
      </main>
    </>
  );
};
