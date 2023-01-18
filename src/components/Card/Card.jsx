import React, { useState } from 'react';
import './Card.scss';
import CardMessage from './CardMessage';
import cn from 'classnames';

const Card = ({
  title = 'Нямушка',
  pretitle = 'Сказочное заморское яство',
  name,
  description,
  disabled,
  weight,
  servings,
  giftCount,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  function handleSelect() {
    if (!disabled) {
      setIsSelected(!isSelected);
    }
  }

  return (
    <div
      className={cn('card', {
        card_selected: isSelected,
        card_default: !disabled,
        card_disabled: disabled,
      })}>
      <div className="card__border" onClick={handleSelect}>
        <div className="card__backdrop">
          <div className="card__text">
            <p className="card__pretitle">{pretitle}</p>
            <h2 className="card__title">{title}</h2>
            <h3 className="card__name">{name}</h3>
            <div className="card__purchase-info">
              <p>
                <span className="card__servings-info">{servings}</span> порций
              </p>
              <p>
                <span className="card__gift-info">{giftCount}</span> мыши в подарок
              </p>
            </div>
          </div>
          <div className="card__weight-label">
            <p className="card__amount">{`${weight}`.replace('.', ',')}</p>
            <p className="card__unit">кг</p>
          </div>
        </div>
      </div>
      <CardMessage
        disabled={disabled}
        isSelected={isSelected}
        name={name}
        description={description}
        handleSelect={handleSelect}
      />
    </div>
  );
};

export default Card;
