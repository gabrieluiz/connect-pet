require('dotenv').config();
const express = require('express');
const cors = require('cors'); // Adicione esta linha
const app = require('./app'); 
const PORT = process.env.PORT || 3000;

// Habilitar CORS
app.use(cors());

// Middleware para JSON
app.use(express.json());

// Rotas
const userRoutes = require('./routes/userRoutes');
const petRoutes = require('./routes/petRoutes');

app.use('/api/users', userRoutes);
app.use('/api/pets', petRoutes);

app.get('/', (req, res) => res.send('Bem-vindo ao Connect Pet!'));

// Iniciar servidor
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
