import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { backendUrl } from "../api/myApi";

const columns = [
  { field: "nombre", headerName: "Nombre", width: 150 },
  { field: "descripcion", headerName: "Descripcion", width: 280 },
  { field: "fechaRegistro", headerName: "Fecha registro", width: 110 },
  { field: "fechaTermino", headerName: "Fecha termino", width: 110 },
  { field: "activo", headerName: "Activo", width: 50 },
];

export default function DataTable() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await backendUrl.get("/tarea/getAll");
        const dataFromApi = response.data;

        // Modifica la estructura de los datos según tu esquema de producto
        const modifiedRows = dataFromApi.map((tarea) => ({
          id: tarea._id,
          nombre: tarea.nombre,
          descripcion: tarea.descripcion,
          fechaRegistro: tarea.fechaRegistro,
          fechaTermino: tarea.fechaTermino,
          activo: tarea.activo,
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
