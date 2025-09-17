// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware pour servir les fichiers statiques (HTML, CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Routes pour les fichiers HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'manuel.html'));
});

app.get('/manuel-6éme.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'manuel-6éme.html'));
});

app.get('/manuel-5éme.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'manuel-5éme.html'));
});

app.get('/manuel-4éme.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'manuel-4éme.html'));
});

app.get('/manuel-3éme.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'manuel-3éme.html'));
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
