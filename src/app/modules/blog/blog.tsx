import React, { FunctionComponent } from "react";
import { Route } from "react-router";
import { BlogBase } from "./blogBase/blogBase";
import { BLOGS } from "./blogF";

export const Blog: FunctionComponent = () => {

  return <div>
    {/*BLOGS.map(blog => <Route key={blog.path} exact path={blog.path} render={() => <BlogBase title={blog.title} /> } />)*/}
  </div>;
};
