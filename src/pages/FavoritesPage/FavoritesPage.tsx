import { RootState } from 'app/stores/mainStore';
import { Cat } from 'app/stores/types';
import CatImage from 'features/CatImage';
import { useSelector } from 'react-redux';

import styles from './FavoritesPage.module.scss';

const FavoritesPage = () => {
  const favoriteCats = useSelector((state: RootState) => state.cats.favorites);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.cats}>
        {favoriteCats.map((cat: Cat) => (
          <CatImage key={cat.id} cat={cat} />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
