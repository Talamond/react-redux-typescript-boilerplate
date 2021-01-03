import { getResumeData } from 'app/utils/resumeData';
import { typeName, Action } from 'jsweetman-redux-typed';

const SUFFIX = '__TIMELINE';

@typeName(`FETCH_DATA${SUFFIX}`)
export class FetchData extends Action {
	constructor(public data: any[]) {
		super();
	}
}

@typeName(`SELECT_TAB${SUFFIX}`)
export class SelectTab extends Action {
	constructor(public id: number, public tabIndex: number) {
		super();
	}
}

@typeName(`CHANGE_DIMENSIONS${SUFFIX}`)
export class ChangeDimensions extends Action {
	constructor(public width: number, public height: number) {
		super();
	}
}

export interface TimelineActions {
	fetchData(): any;
	selectTab(id: number, tabIndex: number): any;
	changeDimensions(width: number, height: number): any;
}

export const timelineActionCreators: TimelineActions = {
	fetchData: (): Action => new FetchData(getResumeData()),
	selectTab: (id: number, tabIndex: number): Action => new SelectTab(id, tabIndex),
	changeDimensions: (width: number, height: number): Action => new ChangeDimensions(width, height)
};
