import { Cat } from 'app/stores/types'
import HeartIcon from 'features/HeartIcon'
import styles from './CatImage.module.scss'

const CatImage = ({ cat }: { cat: Cat }) => {
  return (
    <div className={styles.catImage}>
      <img src={cat.url} alt={`Cat ${cat.id}`} className={styles.catImg} />
      <HeartIcon cat={cat} />
    </div>
  );
};

export default CatImage;
