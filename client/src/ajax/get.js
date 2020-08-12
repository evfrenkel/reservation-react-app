const RESERVATIONS_URL = '/api/reservations';
const RESERVATION_URL = '/api/reservation/';

// if the api changes in the future, we can
// map the data here
function mapReservationsData(data) {
  return data;
}

function mapReservationData(data) {
  return data;
}


export function getReservations() {
  return fetch(RESERVATIONS_URL)
    .then((res) => res.json())
    .then((result) => mapReservationsData(result));
}

export function getReservation(id) {
  return fetch(RESERVATION_URL + id)
    .then((res) => res.json())
    .then((result) => mapReservationData(result));
}
