import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import Posts from './posts';

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;
const myPosts = Posts;

const Routes = [
  {
    path: '/',
    sidebarName: 'Home',
    icon: <HomeIcon fontSize="small" />,
    component: Home
  },
  {
    path: '/posts',
    sidebarName: 'Posts',
    component: myPosts
  },
  {
    path: '/about',
    sidebarName: 'About',
    component: About
  },
];

export default Routes;
