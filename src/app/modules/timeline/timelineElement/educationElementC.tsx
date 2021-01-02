import React from 'react';
import { momentToString } from 'app/utils/dateHelper';
import { checkDeviceSize } from 'app/utils/responsiveHelper';
import { TimelineElement } from '../timelineF';
import ProgressiveImage from 'react-progressive-image';
import style from './educationElement.css';
import { Responsive } from 'app/components/responsive/responsive';

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
    <div className={style.educationElement__title}>
      <h1 className={style.educationElement__jobTitle}>{title}</h1>
      <h3 className={style.educationElement__subtitle}>{momentToString(startDate)} - {momentToString(endDate)}</h3>
      <div className={style.educationElement__imageContainer}>
        <img src={image} className={style.educationElement__image} />
      </div>
    </div>
  );
  const largeEdu = (
    <div className={style.educationElement__title}>
      <h1 className={style.educationElement__jobTitle}>{title}</h1>
      <h2 className={style.educationElement__subtitle}>{subTitle}</h2>
      <h2 className={style.educationElement__subtitle}>{employer}</h2>
      <h3 className={style.educationElement__subtitle}>{momentToString(startDate)} - {momentToString(endDate)}</h3>
      <div className={style.educationElement__imageContainer}>
        <img src={image} className={style.educationElement__image} />
      </div>
    </div>
  );
  return (
    <div key="education" className={style.educationElement}>
      <ProgressiveImage src={schoolImage} placeholder={schoolImageSmall}>
        {(src: string) => <img src={src} alt='an image of UW campus'/>}
      </ProgressiveImage>
      <Responsive className={style.educationElement__title} mobile={smallEdu} pad={smallEdu} desktop={largeEdu}/>
    </div>
  );
};
