import React from 'react';

import cn from 'classnames';

const CardMessage = ({ disabled, isSelected, name, description, handleSelect }) => {
  return (
    <div>
      <p className={cn('message', { message__disabled: disabled })}>
        {isSelected && <>{description}</>}
        {disabled ? (
          <>Печалька, {name} закончился.</>
        ) : (
          !isSelected && (
            <>
              Чего сидишь? Порадуй котэ,{' '}
              <button type="button" className="message__purchase-button" onClick={handleSelect}>
                купи.
              </button>
            </>
          )
        )}
      </p>
    </div>
  );
};

export default CardMessage;
