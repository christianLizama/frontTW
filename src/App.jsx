import { useState } from 'react';
import { RouterProvider } from "react-router-dom";
import MyAppBar from './components/myAppBar';
import MyDrawer from './components/myDrawer';
import './App.css';
import router from './router';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f9d25f', // Cambia este color según tus preferencias
    },
    secondary: {
      main: '#C0C0C0', // Cambia este color según tus preferencias
    },
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif', // Reemplaza con tu fuente personalizada
    // Puedes ajustar otros estilos de tipografía aquí
  },
  // Otros ajustes de tema aquí
});


function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <ThemeProvider  theme={theme}>
    <>
      <MyAppBar handleDrawerOpen={handleDrawerOpen} />
      <MyDrawer isOpen={isDrawerOpen} handleDrawerClose={handleDrawerClose} />
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
    </>
    </ThemeProvider>
  );
}

export default App;
