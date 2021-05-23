import React from 'react';
import styles from './Card.module.scss';

export interface CardProps {
  title: string;
  id: string;
  dateCreated: Date;
}

const Card: React.FC<CardProps & { onClick: () => void }> = ({
  onClick,
  title,
  id,
  dateCreated,
}) => {
  return (
    <div onClick={onClick} className={styles.Card}>
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default Card;
