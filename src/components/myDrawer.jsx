import PropTypes from 'prop-types';
import { Drawer as MUIDrawer, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';

function MyDrawer({ isOpen, handleDrawerClose }) {
  return (
    <MUIDrawer open={isOpen} onClose={handleDrawerClose}>
      <List>
        <ListItemButton component="a" href="/">
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary="Inicio" />
        </ListItemButton>
        <ListItemButton component="a" href="/about">
          <ListItemIcon><InfoIcon /></ListItemIcon>
          <ListItemText primary="Acerca de" />
        </ListItemButton>
        {/* Agrega más elementos aquí si es necesario */}
      </List>
    </MUIDrawer>
  );
}

MyDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleDrawerClose: PropTypes.func.isRequired,
};

export default MyDrawer;
