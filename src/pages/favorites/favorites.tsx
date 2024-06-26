import { useAppSelector } from '../../app/hooks';
import { FavoritesList } from '../../components/favorites-list';
import { Loading } from '../../components/spinner';
import { getFavoriteOffers, getLoadingState } from '../../store/app-data/app-data-selectors';

export const Favorites = () => {
  const offers = useAppSelector(getFavoriteOffers);
  const isLoading = useAppSelector(getLoadingState);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <FavoritesList offers={offers} />
        </section>
      </div>
    </main>
  );
};
