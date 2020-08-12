import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getDate } from 'utilities/dates';

import styles from './FindView.module.scss';

export default function ControlledFindView({ reservations }) {
  return (
    <>
      <h1 className={styles['page-title']}>Find your reservation</h1>
      {reservations.map((res) => (
        <Link
          key={res.confirmationCode}
          to={res.confirmationCode}
          className={styles.reservation}
        >
          <h2>{res.city}</h2>
          <summary className={styles.details}>
            {getDate(res.checkInDate)}
            {' '}
            -
            {getDate(res.checkOutDate)}
            , #
            {res.confirmationCode}
          </summary>
        </Link>
      ))}
    </>
  );
}

ControlledFindView.propTypes = {
  reservations: PropTypes.arrayOf(
    PropTypes.shape({
      confirmationCode: PropTypes.string,
      city: PropTypes.string,
      checkInDate: PropTypes.string,
      checkOutDate: PropTypes.string,
    }),
  ).isRequired,
};
