import { useRouter } from 'next/router';
import React from 'react';
import Card, { CardProps } from './Card';
import styles from './CardGrid.module.scss';

interface CardGridProps {
  cards: CardProps[];
}

const CardGrid: React.FC<CardGridProps> = ({ cards }) => {
  const router = useRouter();

  return (
    <div className={styles.CardGrid}>
      {cards.map(card => (
        <Card
          onClick={() => router.push(`/posts/${card.id}`)}
          key={card.id}
          {...card}
        />
      ))}
    </div>
  );
};

export default CardGrid;
