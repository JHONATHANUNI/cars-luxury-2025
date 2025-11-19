// ---------- Importamos los módulos necesarios ----------
const express = require('express');
const path = require('path');

// ---------- Creamos la aplicación ----------
const app = express();
const PORT = 3001;

// ---------- Servimos archivos estáticos ----------
// CSS
app.use(express.static(path.join(__dirname, '..', 'assets')));

// Imágenes (solo las que usarás en el HTML)
app.use(express.static(path.join(__dirname, '..', 'img')));

// ---------- Ruta principal ----------
// El index.html está un nivel arriba de /src
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

// ---------- Iniciar el servidor ----------
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
