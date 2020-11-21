import React from 'react';
import { emphasize, withStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import HomeIcon from '@material-ui/icons/Home';
import Link from '@material-ui/core/Link';
import { Route } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';

const LinkRouter = (props) => <Link {...props} component={RouterLink} />;

const StyledBreadcrumb = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[900],
    color: theme.palette.grey[50],
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: emphasize(theme.palette.grey[900]),
    },
    '&:active': {
      backgroundColor: emphasize(theme.palette.grey[900], 0.12),
    }
  },
}))(Chip);

function Nav() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <Route>
    <Breadcrumbs aria-label="breadcrumb">
      <LinkRouter color="inherit" to="/">
        <StyledBreadcrumb
          href="/"
          label="Home"
          icon={<HomeIcon fontSize="small" />}
          onClick={handleClick}
        />
      </LinkRouter>
      <LinkRouter color="inherit" to="/posts">
        <StyledBreadcrumb
          href="/posts"
          label="Posts"
          onClick={handleClick}
        />
      </LinkRouter>
      <LinkRouter color="inherit" to="/about">
        <StyledBreadcrumb
          label="About"
          onClick={handleClick}
        />
      </LinkRouter>
    </Breadcrumbs>
  </Route>
  );
}

export default Nav;
