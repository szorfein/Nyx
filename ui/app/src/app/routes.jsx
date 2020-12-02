import React from 'react';
import HomeIcon from '@material-ui/icons/Home';

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;
const Posts = () => <h1>Posts</h1>;

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
    component: Posts
  },
  {
    path: '/about',
    sidebarName: 'About',
    component: About
  },
];

export default Routes;
