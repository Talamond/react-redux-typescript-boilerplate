
import * as moment from 'moment/moment.js';

export interface Skill {
  label: string;
  weight: number;
}

export interface TimelineElement {
  id: number;
  startDate: moment.Moment;
  endDate: moment.Moment;
  summary: string;
  title: string;
  subTitle: string;
  employer: string;
  type: string;
  color: string;
  image: any; // todo: maybe image path
  skills?: Skill[];
}
