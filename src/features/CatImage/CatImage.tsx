import { Cat } from 'app/stores/types'
import styles from './CatImage.module.scss'

const CatImage = ({ cat }: { cat: Cat }) => {
  return (
    <div className={styles.catImage}>
      <img src={cat.url} alt={`Cat ${cat.id}`} className={styles.catImg} />
    </div>
  );
};

export default CatImage;
