import PropTypes from 'prop-types';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function MyAppBar({ handleDrawerOpen }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleDrawerOpen}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">
          InventariApp
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

MyAppBar.propTypes = {
  handleDrawerOpen: PropTypes.func.isRequired,
};

export default MyAppBar;
