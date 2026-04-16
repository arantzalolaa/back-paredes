const express = require('express');
const cors = require('cors');
require('dotenv').config();
const prisma = require('./config/prisma'); // Importa tu cliente de Prisma

const authRoutes = require('./routes/auth.routes');
const aiRoutes = require('./routes/ai.routes');
const alumnosRoutes = require('./routes/alumnos.routes');
const maestrosRoutes = require('./routes/maestros.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/ai', aiRoutes);
app.use('/alumnos', alumnosRoutes);
app.use('/maestros', maestrosRoutes);

const PORT = 3000;
app.listen(PORT, async () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  
  // Fuerza la conexión inicial a MySQL al levantar el backend
  try {
    await prisma.$connect();
    console.log('Conexión a la base de datos establecida y lista.');
  } catch (error) {
    console.error('Error al conectar con la base de datos:', error);
  }
});