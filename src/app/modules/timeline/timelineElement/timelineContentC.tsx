import React from 'react';
import { TimelineElement } from '../timelineF.js';
import { Action } from 'jsweetman-redux-typed';
import OnVisible from 'react-on-visible';
import { checkDeviceSize } from 'app/utils/responsiveHelper';
import _ from 'lodash';
import { TabArea } from 'app/components/tabArea/tabArea';
require('./timelineContent.css');

const isIE = navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0;

const NO_IMAGE_WIDTH = 1100;

export interface Props {
  timelineElem: TimelineElement;
  selectedTab: number;
  onTabSelect: (id: number, tabIndex: number) => Action;
  windowWidth: number;
  timelineType: 'odd' | 'even' | 'education';
}

export const TimelineContentC = (props: Props) => {
  const {timelineElem: {description, descriptions, details, id, image}, selectedTab, windowWidth, onTabSelect} = props;
  let fontSize = 22;
  let maxLength = 750;
  let divisor = 50;
  if (checkDeviceSize() === 'mobile') {
    fontSize = 14;
    maxLength = 500;
    divisor = 100;
  }
  if (description && description.length > maxLength) {
    fontSize = Math.ceil(fontSize - ((description.length - maxLength ) / divisor));
  }
  const tabContents = [
    {
      name: 'Details',
      content: <div className="timelineContent__details">
        {details && details.map((detail, index) => {
          return (
            <OnVisible key={index} visibleClassName="animate-detail">
              <div key={index} className="timelineContent__detail">{detail}</div>
            </OnVisible>
          );
        })}
      </div>
    },
    {
      name: 'Skills',
      content: <div>TagCloud</div>
    },
    {
      name: 'Info',
      content: <div className="timelineContent__description" style={{fontSize: fontSize + 'px'}}>{description}</div>
    }
  ];
  if (descriptions) {
    _.forIn(descriptions, (desc, project) => {
      tabContents.push({name: project, content: <div className="timelineContent__description" style={{fontSize: fontSize + 'px'}}>{desc}</div>});
    });
  }
  return <>
    {windowWidth >= NO_IMAGE_WIDTH && <img src={image} className={`timelineContent__image id${id} ${isIE ? 'ie' : 'notIe'}`} />}
    <TabArea tabContents={tabContents} selectedTab={selectedTab} onTabSelect={(tabIndex) => onTabSelect(id, tabIndex)}/>
  </>;
};
