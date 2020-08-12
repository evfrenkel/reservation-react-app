import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './GlobalPageWrapper.module.scss';

export default function GlobalPageWrapper({ children }) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo} />
        <nav>
          <Link to="/" className={styles['nav-item']}>
            Your reservations
          </Link>
          <Link to="#" className={styles['nav-item']}>
            FAQ
          </Link>
        </nav>
      </header>
      <main className={styles['content-container']}>{children}</main>
      <footer className={styles.footer}>links</footer>
    </>
  );
}

GlobalPageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}
