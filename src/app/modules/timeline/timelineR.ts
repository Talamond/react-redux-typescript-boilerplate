import { isActionType, Reducer } from "jsweetman-redux-typed";
import { ChangeDimensions, FetchData, SelectTab } from "./timelineA";
import { Skill, TimelineElement } from "./timelineF";
import _ from 'lodash';

export interface TimelineState {
  timelineElements?: TimelineElement[],
  selectedTabs: {
    [id: string]: number;
  },
  skillMap: {
    [skillLabel: string]: number;
  },
  allSkills: Skill[],
  summaryWidth: number;
  summaryHeight: number;
}

const getInitialState = (): TimelineState => {
  return {
    selectedTabs: {},
    skillMap: {},
    allSkills: [],
    summaryWidth: window.innerWidth,
    summaryHeight: window.innerHeight
  };
};

export const timelineReducer: Reducer<TimelineState> = (state, action) => {
	if (isActionType(action, SelectTab)) {
    const newState = {...state};
    newState.selectedTabs = {...state.selectedTabs};
    newState.selectedTabs[action.id] = action.tabIndex;
		return newState;
  }

  if (isActionType(action, FetchData)) {
    const newState = {...state};
    newState.timelineElements = [...action.data];
    newState.skillMap = {...state.skillMap};
    newState.timelineElements = _.sortBy(newState.timelineElements, (elem: TimelineElement) => {
      return -1 * elem.endDate.unix();
    });
    newState.timelineElements!.forEach((elem: TimelineElement) => {
      if (elem.skills) {
        elem.skills.forEach((skill: Skill) => {
          if (newState.skillMap[skill.label]) {
            newState.skillMap[skill.label] += skill.weight;
          } else {
            newState.skillMap[skill.label] = skill.weight;
          }
        });
      }
    });
    const allSkills: Skill[] = [];
    _.forIn(newState.skillMap, (value: number, key: string) => {
      allSkills.push({label: key, weight: value});
    });
    newState.allSkills = allSkills;
    return newState;
  }

  if (isActionType(action, ChangeDimensions)) {
    const newState = {...state};
    newState.summaryWidth = action.width;
    newState.summaryHeight = action.height;
    return newState;
  }

	return state || { ...getInitialState() };
};
