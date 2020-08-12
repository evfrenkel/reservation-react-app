
const maybePluralize = (count, noun, suffix = 's') => `${count} ${noun}${count !== 1 ? suffix : ''}`;

const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];

export function getDate(str) {
  const date = new Date(str);
  const month = monthNames[date.getMonth()];

  return `${month} ${date.getDate() + 1} ${date.getFullYear()}`;
}

export function getDateNights(a, b) {
  const date1 = new Date(a);
  const date2 = new Date(b);
  const nights = (date2 - date1) / (24 * 60 * 60 * 1000);

  return `(${maybePluralize(nights, 'night')})`;
}
