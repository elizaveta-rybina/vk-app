import { useAddToFavorites, useRemoveFromFavorites } from 'app/api'
import { RootState } from 'app/stores/mainStore'
import { Cat } from 'app/stores/types'
import { useCallback } from 'react'
import { RiHeart3Fill, RiHeart3Line } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'

interface HeartIconProps {
  cat: Cat;
  className?: string;
}

const HeartIcon = ({ cat, className }: HeartIconProps) => {
  const dispatch = useDispatch();
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

  const handleClick = () => {
    toggleFavorite();
  };

  return isFavorite ? (
    <RiHeart3Fill
      className={className}
      onClick={handleClick}
      style={{ color: 'red' }} 
    />
  ) : (
    <RiHeart3Line
      className={className}
      onClick={handleClick}
    />
  );
};

export default HeartIcon;
