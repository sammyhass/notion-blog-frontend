import { useRouter } from 'next/router';
import React from 'react';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  const router = useRouter();

  const goHome = () => router.push('/');
  return (
    <div className={styles.Header}>
      <h2
        onClick={goHome}
        className="text-2xl font-semibold line select-none cursor-pointer rounded-full transition-all"
      >
        Blog
      </h2>
    </div>
  );
};

export default Header;
