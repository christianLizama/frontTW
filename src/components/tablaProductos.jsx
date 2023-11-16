import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { backendUrl } from "../api/myApi";

const columns = [
    { field: "nombre", headerName: "Nombre", width: 150 },
    { field: "fechaLlegada", headerName: "Fecha llegada", width: 130 },
    { field: "fechaSalida", headerName: "Fecha salida", width: 130 },
    { field: "dimensiones", headerName: "Dimensiones", width: 150, 
      valueGetter: (params) => {
        return params.row.dimensiones;
      },
    },
    { field: "peso", headerName: "Peso", width: 100 },
  ];

export default function DataTable() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await backendUrl.get("/producto/getAll");
        const dataFromApi = response.data;

        // Modifica la estructura de los datos según tu esquema de producto
        const modifiedRows = dataFromApi.map((producto) => ({
          id: producto._id,
          // Mapea otros campos según tu esquema
          nombre: producto.nombre,
          fechaLlegada: producto.fechaLlegada,
          fechaSalida: producto.fechaSalida,
          dimensiones: `${producto.dimensiones.alto}x${producto.dimensiones.ancho}x${producto.dimensiones.largo}`,
          peso: producto.peso,
        }));

        setRows(modifiedRows);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    getData();
  }, []); // El segundo argumento [] asegura que useEffect solo se ejecute una vez al montar el componente

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
