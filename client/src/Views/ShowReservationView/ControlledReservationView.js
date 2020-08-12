import React from 'react';
import PropTypes from 'prop-types';
import { getDate, getDateNights } from 'utilities/dates';
import { Rating } from 'shared-components';
import styles from './ShowReservationView.module.scss';

export default function ControlledReservationView({ reservation }) {
  return (
    <>
      <h1>
        Your reservation in{" "}
        {reservation.city}
      </h1>
      <div className={styles['picture-and-details']}>
        <img
          className={styles.picture}
          alt="location"
          src={reservation.cityImage}
        />
        <div className={styles.details}>
          <h2 className={styles['details--heading']}>Location</h2>
          <div className={styles['details--text']}>{reservation.city}</div>
          <h2 className={styles['details--heading']}>Dates</h2>
          <div className={styles['details--text']}>
            {getDate(reservation.checkInDate)}
            {' '}
            -
            {getDate(reservation.checkOutDate)}
            {' '}
            {getDateNights(reservation.checkInDate, reservation.checkOutDate)}
          </div>
          <h2 className={styles['details--heading']}>Confirmation Code</h2>
          <div className={styles['details--text']}>
            {reservation.confirmationCode}
          </div>
        </div>
      </div>
      <Rating value={reservation.rating} />
    </>
  );
}

ControlledReservationView.propTypes = {
  reservation: PropTypes.object.isRequired,
};
