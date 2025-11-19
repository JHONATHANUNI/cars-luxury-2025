import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Importar rutas
import authRoutes from "./routes/auth.js";
app.use("/auth", authRoutes);

app.listen(3001, () => console.log("Servidor backend en http://localhost:3001"));
