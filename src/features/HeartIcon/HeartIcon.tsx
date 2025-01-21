import { useAddToFavorites, useRemoveFromFavorites } from 'app/api';
import { RootState } from 'app/stores/mainStore';
import { Cat } from 'app/stores/types';
import { useCallback } from 'react';
import { RiHeart3Fill, RiHeart3Line } from 'react-icons/ri';
import { useSelector } from 'react-redux';

import styles from './HeartIcon.module.scss';

interface HeartIconProps {
  cat: Cat;
}

const HeartIcon = ({ cat }: HeartIconProps) => {
  const favoriteCats = useSelector((state: RootState) => state.cats.favorites);

  const isFavorite = favoriteCats.some(favCat => favCat.id === cat.id);

  const { mutate: addToFavorites } = useAddToFavorites();
  const { mutate: removeFromFavorites } = useRemoveFromFavorites();

  const toggleFavorite = useCallback(() => {
    if (isFavorite) {
      removeFromFavorites(cat.id);
    } else {
      addToFavorites(cat);
    }
  }, [cat, isFavorite, addToFavorites, removeFromFavorites]);

  return isFavorite ? (
    <RiHeart3Fill
      className={`${styles.heart} ${styles.active}`}
      onClick={toggleFavorite}
    />
  ) : (
    <RiHeart3Line
      className={styles.heart}
      onClick={toggleFavorite}
    />
  );
};

export default HeartIcon;
