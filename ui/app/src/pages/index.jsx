import React, { Fragment } from 'react';
import { PageContainer } from '../components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//import Posts from './posts';
const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;
const Posts = () => <h1>Posts</h1>;

function Pages() {
  return (
    <Fragment>
      <PageContainer>
        <Router primary={false} component={Fragment}>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/posts" component={Posts}/>
            <Route path="/about" component={About}/>
          </Switch>
        </Router>
      </PageContainer>
    </Fragment>
  );
}

export default Pages;
