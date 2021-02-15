import { ProfileTile } from "app/components/profileTile/profileTile";
import React from "react";
import { FunctionComponent } from "react";
import { BlogItem } from "../blog/blogF";

require('./blogEntry.css');

const Arrow = require('../../../assets/images/arrow.svg');

interface Props {
  blogItem: BlogItem;
}

export const BlogEntry: FunctionComponent<Props> = ({blogItem: {title, summary, date}}: Props) => {
  return <li className="blogEntry">
    <ProfileTile date={date}/>
    <div className="blogEntry__title">{title}</div>
    <div className="blogEntry__summary">{summary}</div>
    <div className="blogEntry__showMore" onClick={(e) => false}>
      <span>Read More</span>
      <Arrow />
    </div>
  </li>;
};
