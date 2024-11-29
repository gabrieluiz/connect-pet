const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const petRoutes = require('./routes/petRoutes');
const setupSwagger = require('./swagger'); // Importa o Swagger

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/users', userRoutes);
app.use('/api/pets', petRoutes);

// Configuração do Swagger
setupSwagger(app);

app.get('/', (req, res) => res.send('Bem-vindo ao Connect Pet!'));

module.exports = app;
