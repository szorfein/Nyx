import React from 'react';
import { emphasize, withStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import Link from '@material-ui/core/Link';
import { Route } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import Routes from './routes';
import AppBar from '@material-ui/core/AppBar';


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
  const [, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <div>
      <AppBar color="transparent" position="static">
        <Route>
          <Breadcrumbs aria-label="breadcrumb">
            { Routes.map((prop, key) => {
              return (
                <LinkRouter key={ key } color="inherit" to={ prop.path }>
                  <StyledBreadcrumb
                    href={ prop.path }
                    label={ prop.sidebarName }
                    icon={ prop.icon ? prop.icon : null }
                    onClick={ handleClick }
                />
                </LinkRouter>
              );
            })};
          </Breadcrumbs>
        </Route>
      </AppBar>
    </div>
  );
}

export default Nav;
