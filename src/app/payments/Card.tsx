import { ICard } from '../../types/paymentTypes.ts'
import { CARD_TYPES } from '../../constants/cardTypes.ts'
import React from 'react'

interface CardProps extends ICard {
  onClick?: (e: React.MouseEvent) => void
  cardSize?: 'small' | 'big'
}

export default function Card({
  type,
  nickname,
  cardNumbers = [],
  expirationMonth,
  expirationYear,
  owner,
  cardSize = 'small',
  onClick: handleClick,
}: CardProps) {
  return (
    <>
      <div className='card-box' onClick={handleClick}>
        <div
          className={`${cardSize}-card`}
          style={{ backgroundColor: CARD_TYPES[type]?.color }}
        >
          <div className='card-top'>
            <span className={`card-text__${cardSize}`}>{type}</span>
          </div>
          <div className='card-middle'>
            <div className={`${cardSize}-card__chip`}></div>
          </div>
          <div className='card-bottom'>
            <div className='card-bottom__number'>
              <span className={`card-text__${cardSize}`}>
                {cardNumbers
                  .map(({ numbers, isPrivate }) =>
                    (isPrivate ? '*'.repeat(numbers.length) : numbers).padEnd(
                      4,
                      '_',
                    ),
                  )
                  .join(' - ')}
              </span>
            </div>
            <div className='card-bottom__info'>
              <span className={`card-text__${cardSize}`}>{owner}</span>
              <span className={`card-text__${cardSize}`}>
                {expirationMonth} / {expirationYear}
              </span>
            </div>
          </div>
        </div>
      </div>
      {Boolean(nickname && cardSize === 'small') && (
        <span className='card-nickname'>{nickname}</span>
      )}
    </>
  )
}
