import { ICard } from '../../types/paymentTypes.ts'
import { CARD_TYPES } from '../../constants/cardTypes.ts'
import React from 'react'
import Card from '../../components/card'

interface PaymentCardProps extends ICard {
  onClick?: (e: React.MouseEvent) => void
  cardSize?: 'small' | 'big'
}

export default function PaymentCard({
  type,
  nickname,
  cardNumbers = [],
  expirationMonth,
  expirationYear,
  owner,
  cardSize = 'small',
  onClick: handleClick,
}: PaymentCardProps) {
  return (
    <>
      <Card.Box
        size={cardSize}
        color={CARD_TYPES[type]?.color}
        onClick={handleClick}
      >
        <Card.Section position='top'>
          <Card.Text size={cardSize}>{type}</Card.Text>
        </Card.Section>
        <Card.Section position='middle'>
          <Card.Chip size={cardSize} />
        </Card.Section>
        <Card.Section position='bottom'>
          <Card.Section position='bottom' role='number'>
            <Card.Text size={cardSize}>
              {cardNumbers
                .map(({ numbers, isPrivate }) =>
                  (isPrivate ? '*'.repeat(numbers.length) : numbers).padEnd(
                    4,
                    '_',
                  ),
                )
                .join(' - ')}
            </Card.Text>
          </Card.Section>
          <Card.Section position='bottom' role='info'>
            <Card.Text size={cardSize}>{owner}</Card.Text>
            <Card.Date
              size={cardSize}
              month={expirationMonth}
              year={expirationYear}
            />
          </Card.Section>
        </Card.Section>
      </Card.Box>
      {Boolean(nickname && cardSize === 'small') && (
        <Card.Nickname>{nickname}</Card.Nickname>
      )}
    </>
  )
}
