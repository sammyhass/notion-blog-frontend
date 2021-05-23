import React from 'react';
import styles from './PageView.module.scss';

interface PageViewProps {
  blocks: any[];
  title: string;
  dateCreated: Date;
  dateUpdated: Date;
}

const PageView: React.FC<PageViewProps> = ({
  blocks,
  title,
  dateCreated,
  dateUpdated,
}) => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.articleHeader}>
        <h1 className={styles.title}>{title}</h1>
        <span className={styles.dateCreated}>
          Uploaded on {new Date(dateCreated).toDateString()}
        </span>
      </div>
      <div className={styles.body}>
        {blocks.map(block => (
          <div>{block.paragraph?.text?.[0]?.plain_text}</div>
        ))}
      </div>
    </div>
  );
};

export default PageView;
