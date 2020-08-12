import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReservation } from 'ajax/get';
import { ErrorOrLoading } from 'Views';
import ControlledReservationView from './ControlledReservationView';

export default function ShowReservationView() {
  const { confirmationCode } = useParams();

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [reservation, setReservation] = useState({});

  useEffect(() => {
    getReservation(confirmationCode).then(
      (result) => {
        setReservation(result);
        setIsLoaded(true);
      },
      (getError) => {
        setError(getError);
        setIsLoaded(true);
      },
    );
  }, []);

  return (
    <ErrorOrLoading loading={!isLoaded} error={error}>
      <ControlledReservationView reservation={reservation} />
    </ErrorOrLoading>
  );
}
