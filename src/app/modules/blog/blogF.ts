import { createDate } from "app/utils/dateHelper";
import { ROOT_PATH } from "../app/appF";

export const BLOG_PATH = `${ROOT_PATH}/blog`;
export const FRAGMENT = `redux-fragments`;
export const TEST_FRAGMENT = `testing-redux-fragments`;
export const SYNOPSIS = `talamond-synopsis`;
export const ABOUT_ME = `about-me`;
export const DOS_AND_DONTS = `react-dos-and-dont`;

export interface BlogItem {
  id: string;
  title: string;
  summary: string;
  date: moment.Moment;
  path: string;
}

export const BLOGS = [
  {
    id: FRAGMENT,
    title: 'Introduction to redux-fragments',
    path: `${BLOG_PATH}/${FRAGMENT}`,
    summary: 'Learn about redux-fragments and how they might help shape your web application',
    date: createDate('2017-01-27')
  },
  {
    id: TEST_FRAGMENT,
    title: 'Testing redux-fragments',
    path: `${BLOG_PATH}/${TEST_FRAGMENT}`,
    summary: 'Learn stratageies on testing redux-fragments',
    date: createDate('2017-01-28')
  },
  {
    id: SYNOPSIS,
    title: 'Creating talamond-synopsis v1',
    path: `${BLOG_PATH}/${SYNOPSIS}`,
    summary: 'Learn the cogs and gears behind this website',
    date: createDate('2017-01-31')
  },
  {
    id: ABOUT_ME,
    title: 'A little about me',
    path: `${BLOG_PATH}/${ABOUT_ME}`,
    summary: 'Learn a bit about me',
    date: createDate('2017-02-01')
  },
  {
    id: DOS_AND_DONTS,
    title: 'React dos and don\'ts',
    path: `${BLOG_PATH}/${DOS_AND_DONTS}`,
    summary: 'React tips and tricks!',
    date: createDate('2017-02-13')
  }
];
