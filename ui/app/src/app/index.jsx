import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './nav';

//import Posts from './posts';
const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;
const Posts = () => <h1>Posts</h1>;

function App() {
  return (
    <Fragment>
      <Container maxWidth="sm">
        <Router primary={false} component={Fragment}>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/posts" component={Posts}/>
            <Route path="/about" component={About}/>
          </Switch>
        </Router>
      </Container>
    </Fragment>
  );
}

export default App;
