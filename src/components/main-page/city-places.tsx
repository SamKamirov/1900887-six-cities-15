import { FC } from 'react';
import { TCityPlaces } from '../../types/offers';
import { PlacesSorting } from './places-sorting';
import { CityPlacesList } from './city-places-list';

const CityPlaces: FC<TCityPlaces> = ({offers, onOfferHover}) => {
  const placesCount = offers.length;

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{placesCount} places to stay in Amsterdam</b>
      <PlacesSorting/>
      <CityPlacesList offers={offers} onOfferHover={onOfferHover}/>
    </section>
  );
};

export {CityPlaces};
