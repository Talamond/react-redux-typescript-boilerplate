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
	constructor(public id: string, public tabIndex: number) {
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
	fetchData(data: any[]): Action;
	selectTab(id: string, tabIndex: number): Action;
	changeDimensions(width: number, height: number): Action;
}

export const timelineActionCreators: TimelineActions = {
	fetchData: (data: any[]): Action => new FetchData(data),
	selectTab: (id: string, tabIndex: number): Action => new SelectTab(id, tabIndex),
	changeDimensions: (width: number, height: number): Action => new ChangeDimensions(width, height)
};
