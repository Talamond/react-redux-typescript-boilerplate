import { provide } from 'jsweetman-redux-typed';
import { bindActionCreators } from 'redux';
import { RootState } from '../index';
import { withRouter } from 'react-router';
import { timelineActionCreators } from './timelineA';
import { TimelineC } from './timelineC';

const provider = provide(
	() => {
		return (state: RootState) => {
			return {
				timelineState: state.timeline
			};
		};
	},
	(dispatch: any) => ({
		actions: bindActionCreators(
			{
        ...timelineActionCreators
			},
			dispatch
		)
	})
);

export const TimelineM = withRouter(provider.connect(TimelineC as any) as any);
