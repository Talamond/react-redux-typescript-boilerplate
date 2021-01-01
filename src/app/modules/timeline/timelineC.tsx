import React from 'react';
import { RouteComponentProps } from 'react-router';



export namespace TimelineC {
  export interface Props extends RouteComponentProps<void> {}
}

export const TimelineC = ({ history, location }: TimelineC.Props) => {

  return (<div className="cool-timeline-root">
    Timeline
    </div>
  );
};
