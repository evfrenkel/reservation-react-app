import React from 'react';
import PropTypes from 'prop-types';
import styles from './ErrorOrLoading.module.scss';

export default function ErrorOrLoading({ error, loading, children }) {
  if (error) {
    return (
      <div className={styles.container}>
        Network Offline
      </div>
    );
  } if (loading) {
    return <div className={styles.container} />;
  }

  return children;
}

ErrorOrLoading.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.string,
};
