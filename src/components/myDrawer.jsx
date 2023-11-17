import PropTypes from 'prop-types';
import { Drawer as MUIDrawer, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import {AdminPanelSettings, Home, Info, Inventory, LibraryBooks, Task } from '@mui/icons-material';

function MyDrawer({ isOpen, handleDrawerClose }) {
  return (
    <MUIDrawer open={isOpen} onClose={handleDrawerClose}>
      <List>
        <ListItemButton component="a" href="/">
          <ListItemIcon><Home /></ListItemIcon>
          <ListItemText primary="Inicio" />
        </ListItemButton>
        <ListItemButton component="a" href="/productos">
          <ListItemIcon><Inventory /></ListItemIcon>
          <ListItemText primary="Productos" />
        </ListItemButton>
        <ListItemButton component="a" href="/tareas">
          <ListItemIcon><Task /></ListItemIcon>
          <ListItemText primary="Tareas" />
        </ListItemButton>
        <ListItemButton component="a" href="/informes">
          <ListItemIcon><LibraryBooks /></ListItemIcon>
          <ListItemText primary="Informes" />
        </ListItemButton>
        <ListItemButton component="a" href="/administracion">
          <ListItemIcon><AdminPanelSettings /></ListItemIcon>
          <ListItemText primary="Administracion" />
        </ListItemButton>
        <ListItemButton component="a" href="/about">
          <ListItemIcon><Info /></ListItemIcon>
          <ListItemText primary="Acerca de" />
        </ListItemButton>
      </List>
    </MUIDrawer>
  );
}

MyDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleDrawerClose: PropTypes.func.isRequired,
};

export default MyDrawer;
