import { Footer } from '../../components/footer';
import { Navigatie } from '../../components/navigatie';
import styles from '../../styles/containers.module.css';

export default () => {
  return (
    <>
      <Navigatie />
      <main className={styles.container}>
        <h1>Lely Nederland</h1>
        <p>lorem ipsum</p>
        <Footer />
      </main>
    </>
  );
};
