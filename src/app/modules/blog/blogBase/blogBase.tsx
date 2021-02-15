import { ProfileTile } from "app/components/profileTile/profileTile";
import { navigate } from "app/utils/navHelper";
import React, { ReactNode } from "react";
import { FunctionComponent } from "react";

require('./blogBase.css');

const ArrowLeft = require('../../../../assets/images/arrow-left.svg');
const ArrowRight = require('../../../../assets/images/arrow-right.svg');

interface Props {
  title: string;
  date: moment.Moment;
  content: ReactNode;
}

export const BlogBase: FunctionComponent<Props> = ({title, date, content}: Props) => {
  return <div className="blogBase">
    <div className="blogBase__titleArea">
      <ProfileTile date={date} />
      <div className="blogBase__title">{title}</div>
    </div>
    <div className="blogBase__content">{content}</div>
    <div className="blogBase__navigation">
      <a className="blogBase__backArea" onClick={(e) => false}>
        <ArrowLeft />
        <span>PREV BLOG</span>
      </a>
      <a className="blogBase__nextArea" onClick={(e) => false}>
        <span>NEXT BLOG</span>
        <ArrowRight />
      </a>
    </div>
  </div>;
};
