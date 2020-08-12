import React, { useState, useEffect } from 'react';
import { getReservations } from 'ajax/get';
import ErrorOrLoading from 'Views/ErrorOrLoading';
import ControlledFindView from './ControlledFindView';

export default function FindView() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    getReservations().then(
      (result) => {
        setReservations(result);
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
      <ControlledFindView reservations={reservations} />
    </ErrorOrLoading>
  );
}
