import { Typography } from "@mui/material";
import TablaProductos from "../components/tablaProductos";
const Productos = () => {
    return (
      <div>
        <Typography variant="h4" color="initial">
          Productos
        </Typography>
        <TablaProductos />
      </div>
    );
  }
  
  export default Productos;