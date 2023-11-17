import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { backendUrl } from "../api/myApi";

const FormularioProducto = () => {
  const navigate = useNavigate();

  const [producto, setProducto] = useState({
    nombre: "",
    fechaLlegada: "",
    fechaSalida: "",
    dimensiones: {
      alto: "",
      ancho: "",
      largo: "",
    },
    peso: "",
  });

  const handleChange = (evento) => {
    const { name, value } = evento.target;

    if (name.startsWith("dimensiones")) {
      const dimension = name.split(".")[1];
      setProducto({
        ...producto,
        dimensiones: {
          ...producto.dimensiones,
          [dimension]: value,
        },
      });
    } else {
      setProducto({
        ...producto,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    try {
      console.log("Producto enviado:", producto);
      await backendUrl.post("/producto/add", producto);
      alert("Producto creado exitosamente");
      navigate("/productos");
    } catch (error) {
      console.error("Error al crear el producto:", error);
    }
    console.log("Producto enviado:", producto);
  };

  return (
    <Container maxWidth="sm">
      <Box
        mt={4}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        <form onSubmit={handleSubmit}>
          <div style={{ textAlign: "left", width: "100%" }}>
            <Typography>Nombre</Typography>
            <TextField
              name="nombre"
              value={producto.nombre}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <Typography>Fecha de Llegada</Typography>
            <TextField
              name="fechaLlegada"
              type="datetime-local"
              value={producto.fechaLlegada}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <Typography>Fecha de Salida</Typography>
            <TextField
              name="fechaSalida"
              type="datetime-local"
              value={producto.fechaSalida}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <Typography>Dimensiones</Typography>
            <TextField
              name="dimensiones.alto"
              type="number"
              label="Alto"
              value={producto.dimensiones.alto}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              name="dimensiones.ancho"
              type="number"
              label="Ancho"
              value={producto.dimensiones.ancho}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              name="dimensiones.largo"
              type="number"
              label="Largo"
              value={producto.dimensiones.largo}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <Typography>Peso</Typography>
            <TextField
              name="peso"
              type="number"
              value={producto.peso}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
          </div>
          <div style={{ textAlign: "center", width: "100%" }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ marginBottom: "10px", marginTop: "20px" }}
            >
              Agregar
            </Button>
            <Link to="/productos" style={{ textDecoration: "none" }}>
              <Button
                type="reset"
                variant="contained"
                color="secondary"
                style={{
                  marginBottom: "10px",
                  marginTop: "20px",
                  marginLeft: "10px",
                }}
              >
                Cancelar
              </Button>
            </Link>
          </div>
        </form>
      </Box>
    </Container>
  );
};

export default FormularioProducto;
