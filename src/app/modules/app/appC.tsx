import { Header } from 'app/components/header/header';
import React from 'react';
import {  Redirect, Route, RouteComponentProps } from 'react-router';
import { Timeline } from '../timeline/timeline';
import { TIMELINE_PATH } from '../timeline/timelineF';
import { HEADER_ELEMS } from './appF';

require('./app.css');

export namespace App {
  export interface Props extends RouteComponentProps<void> {}
}

export const AppC = ({ history, location }: App.Props) => {
  // const dispatch = useDispatch();
  // const todoActions = useTodoActions(dispatch);
  // const { todos, filter } = useSelector((state: RootState) => {
  //   const hash = location?.hash?.replace('#', '');
  //   return {
  //     todos: state.todos,
  //     filter: FILTER_VALUES.find((value) => value === hash) ?? TodoModel.Filter.SHOW_ALL
  //   };
  // });

  // const handleClearCompleted = React.useCallback((): void => {
  //   todoActions.clearCompleted();
  // }, [todoActions]);

  // const handleFilterChange = React.useCallback(
  //   (filter: TodoModel.Filter): void => {
  //     history.push(`#${filter}`);
  //   },
  //   [history]
  // );

  // const filteredTodos = React.useMemo(() => (filter ? todos.filter(FILTER_FUNCTIONS[filter]) : todos), [todos, filter]);
  // const activeCount = React.useMemo(() => todos.filter((todo) => !todo.completed).length, [todos]);
  // const completedCount = React.useMemo(() => todos.filter((todo) => todo.completed).length, [todos]);

  /*

  IndexRoute component={TimelineContainer}/>
      <Route path={NAVIGATION.TIMELINE.PATH} component={TimelineContainer}/>
      <Route path={NAVIGATION.BLOG.PATH} component={BlogContainer}>
        <IndexRoute component={BlogContainer}/>
        <Route path={NAVIGATION.BLOG.PATH + NAVIGATION.BLOG.FRAGMENT.PATH} component={BlogContainer}/>
        <Route path={NAVIGATION.BLOG.PATH + NAVIGATION.BLOG.TESTING_FRAGMENT.PATH} component={BlogContainer}/>
        <Route path={NAVIGATION.BLOG.PATH + NAVIGATION.BLOG.ABOUT_ME.PATH} component={BlogContainer}/>
        <Route path={NAVIGATION.BLOG.PATH + NAVIGATION.BLOG.SYNOPSIS.PATH} component={BlogContainer}/>
        <Route path={NAVIGATION.BLOG.PATH + NAVIGATION.BLOG.REACT.PATH} component={BlogContainer}/>
      </Route>
      <Footer/>
      */
  return (<div className="app-root">
      <Header headers={HEADER_ELEMS}/>
      <div className="app-main">
        <Route exact path="/">
            <Redirect to={TIMELINE_PATH} />
        </Route>
        <Route path={TIMELINE_PATH} component={Timeline}/>
      </div>
    </div>
  );
};
