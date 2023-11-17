import { Typography, Button } from "@mui/material";
import TablaProductos from "../components/tablaProductos";
import { Link } from "react-router-dom";


const Productos = () => {
  return (
    <div>
      <Typography
        variant="h4"
        color="initial"
        style={{ marginBottom: "20px", marginTop: "20px" }}
      >
        Productos
      </Typography>
      <Link to="/crearProducto" style={{ textDecoration: "none" }}>
        <Button
          variant="contained"
          color="primary"
          style={{ marginBottom: "20px" }}
        >
          Crear producto
        </Button>
      </Link>
      <TablaProductos />
    </div>
  );
};

export default Productos;
