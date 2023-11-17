import {
  Grid,
  Card,
  CardContent,
  CircularProgress,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
} from "recharts";

const Dashboard = () => {
  const progressData = [
    { title: "Tarea 1", progress: 60, color: "#2196f3", textColor: "#fff" },
    { title: "Tarea 2", progress: 30, color: "#4caf50", textColor: "#fff" },
    { title: "Tarea 3", progress: 80, color: "#ff9800", textColor: "#fff" },
    { title: "Tarea 4", progress: 45, color: "#e91e63", textColor: "#fff" },
  ];

  const chartData1 = [
    { name: "Tarea 1", value: 60 },
    { name: "Tarea 2", value: 30 },
    { name: "Tarea 3", value: 80 },
    { name: "Tarea 4", value: 45 },
    { name: "Tarea 5", value: 70 },
    { name: "Tarea 6", value: 90 },
    { name: "Tarea 7", value: 100 },
    { name: "Tarea 8", value: 30 },
  ];

  const chartData2 = [
    { name: "Tarea A", value: 20 },
    { name: "Tarea B", value: 50 },
    { name: "Tarea C", value: 70 },
    { name: "Tarea D", value: 90 },
    { name: "Tarea E", value: 30 },
    { name: "Tarea F", value: 50 },
    { name: "Tarea G", value: 70 },
    { name: "Tarea H", value: 90 },
  ];

  const productData = [
    {
      id: 1,
      name: "Producto 1",
      category: "Electrónica",
      price: 100000,
      stock: 25,
    },
    { id: 2, name: "Producto 2", category: "Ropa", price: 200000, stock: 50 },
    { id: 3, name: "Producto 3", category: "Hogar", price: 50000, stock: 10 },
    {
      id: 4,
      name: "Producto 4",
      category: "Electrónica",
      price: 40000,
      stock: 5,
    },
    // Agrega más productos según sea necesario
  ];

  return (
    <Grid container spacing={2} sx={{ padding: "20px" }}>
      {progressData.map((item, index) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          key={index}
          sx={{ marginBottom: "20px" }}
        >
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: item.color,
              height: "100%",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)", // Sombra suave
              borderRadius: "15px", // Bordes redondeados
              transition: "transform 0.3s ease-in-out", // Animación de transición
              "&:hover": {
                transform: "scale(1.05)", // Efecto de escala al pasar el ratón
              },
            }}
          >
            <CardContent sx={{ flex: "1 1 auto" }}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ color: item.textColor }}
              >
                {item.title}
              </Typography>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <CircularProgress
                  variant="determinate"
                  value={item.progress}
                  size={80}
                  thickness={6}
                  sx={{ color: item.textColor }}
                />
              </div>
              <Typography
                variant="h7"
                color="textSecondary"
                sx={{ color: item.textColor }}
              >
                Progreso: {item.progress}%
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
      <Grid item xs={12} sm={6} sx={{ marginBottom: "20px" }}>
        <Card sx={{borderRadius:"15px",boxShadow: "0 4px 8px rgba(0,0,0,0.1)",}}>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData1}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#8884d8" barSize={30} radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} sx={{ marginBottom: "20px" }}>
        <Card sx={{borderRadius:"15px",boxShadow: "0 4px 8px rgba(0,0,0,0.1)",}}>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData2}>
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#82ca9d"
                  strokeWidth={3}
                  dot={{ stroke: '#82ca9d', strokeWidth: 3, fill: '#fff' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sx={{ marginBottom: "20px" }}>
        <Card sx={{borderRadius:"15px",boxShadow: "0 4px 8px rgba(0,0,0,0.1)",}}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Productos
            </Typography>
            <TableContainer>
              <Table sx={{ minWidth: 650 }}>
                <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
                  <TableRow>
                    <TableCell>
                      <strong>Nombre</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Categoría</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Precio</strong>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {productData.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.category}</TableCell>
                      <TableCell>${item.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
