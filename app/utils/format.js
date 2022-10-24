import moment from 'moment';

export const dateToString = date => {
  const m = moment(date);

  return moment(m).isSame(moment(), 'day')
    ? `Today at ${m.format('h:mm A')}`
    : m.format('ddd, MMM D, h:mm A');
};
export const dateTodayString = date => {
  const m = moment(date);

  return m.format('DD.MM.YYYY');
};

export const formatToLength = (str, length) =>
  str?.length > length ? `${str.substr(0, length)}...` : str;

export const generateBadge = length =>
  length ? `${length > 5 ? '5+' : length}` : '';

export const durationToString = duration => {
  const durationMoment = moment.duration(Number(duration));
  const durationHours = durationMoment.hours();
  const durationMinutes = durationMoment.minutes();
  return `${
    durationHours ? `${durationHours} hrs` : ''
  } ${durationMinutes} min`;
};
