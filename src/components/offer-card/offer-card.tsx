import { FC, memo } from 'react';
import { Offer } from '../../types/offers';
import { AppRoutes } from '../../app/routes/routes';
import { Link } from 'react-router-dom';
import { PlaceCardMark } from '../place-card-mark';
import { Bookmark } from '../favorites-bookmark';
import { capitalize } from '../../utils';

type TOfferCard = {
  offer: Offer;
  onMouseEvent?: (offer: Offer | null) => void;
};

const OfferCard: FC<TOfferCard> = ({ offer, onMouseEvent }) => {
  const handleOfferHover = () => onMouseEvent && onMouseEvent(offer);
  const handleMouseOff = () => onMouseEvent && onMouseEvent(null);

  const { id, title, type, price, isPremium, rating, previewImage, isFavorite } = offer;

  return (
    <article className="cities__card place-card" onMouseEnter={handleOfferHover} onMouseLeave={handleMouseOff}>
      <Link to={`${AppRoutes.Offer}/${id}`}>
        {isPremium && <PlaceCardMark />}
        <div className="cities__image-wrapper place-card__image-wrapper">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </div>
      </Link>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <Bookmark id={id} isFavorite={isFavorite} bookmarkClassName='place-card' height={18} width={19} />
        </div>
        <Link to={`${AppRoutes.Offer}/${id}`}>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{ width: `${rating * 20}%` }}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">{title}</h2>
          <p className="place-card__type">{capitalize(type)}</p>
        </Link>
      </div>
    </article >
  );
};

const MemoOfferCard = memo(OfferCard);

export { MemoOfferCard as OfferCard };
