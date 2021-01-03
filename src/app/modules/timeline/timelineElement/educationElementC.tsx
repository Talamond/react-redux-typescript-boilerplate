import React from 'react';
import { momentToString } from 'app/utils/dateHelper';
import { checkDeviceSize } from 'app/utils/responsiveHelper';
import { TimelineElement } from '../timelineF';
import ProgressiveImage from 'react-progressive-image';
import { Responsive } from 'app/components/responsive/responsive';
require('./educationElement.css');

export interface Props {
  timelineElem: TimelineElement;
}

export const EducationElementC = (props: Props) => {
  let schoolImage = '../../../../assets/images/UW_Building-mobile.jpg';
  let schoolImageSmall = '../../../../assets/images/UWsmallMobile.jpg';
  if (checkDeviceSize() === 'mobile') {
    schoolImage = '../../../../assets/images/UW_Building-full.jpg';
    schoolImageSmall = '../../../../assets/images/UWSmall.jpg';
  }
  const {startDate, endDate, image, title, subTitle, employer} = props.timelineElem;

  const smallEdu = (
    <div className="educationElement__title">
      <h1 className="educationElement__jobTitle">{title}</h1>
      <h3 className="educationElement__subtitle">{momentToString(startDate)} - {momentToString(endDate)}</h3>
      <div className="educationElement__imageContainer">
        <img src={image} className="educationElement__image" />
      </div>
    </div>
  );
  const largeEdu = (
    <div className="educationElement__title">
      <h1 className="educationElement__jobTitle">{title}</h1>
      <h2 className="educationElement__subtitle">{subTitle}</h2>
      <h2 className="educationElement__subtitle">{employer}</h2>
      <h3 className="educationElement__subtitle">{momentToString(startDate)} - {momentToString(endDate)}</h3>
      <div className="educationElement__imageContainer">
        <img src={image} className="educationElement__image" />
      </div>
    </div>
  );
  return (
    <div key="education" className="educationElement">
      <ProgressiveImage src={schoolImage} placeholder={schoolImageSmall}>
        {(src: string) => <img src={src} alt='an image of UW campus'/>}
      </ProgressiveImage>
      <Responsive className="educationElement__title" mobile={smallEdu} pad={smallEdu} desktop={largeEdu}/>
    </div>
  );
};
