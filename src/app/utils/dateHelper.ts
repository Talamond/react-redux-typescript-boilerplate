import * as moment from 'moment';

export const DATE_FORMAT = 'YYYY-MM-DD';
export const OUTPUT_FORMAT = 'MMM Do YYYY';

export function createDate(date: moment.Moment) {
  return moment(date, DATE_FORMAT);
}

export function momentToString(date: moment.Moment) {
  return date.format(OUTPUT_FORMAT);
}
