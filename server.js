const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/status', (req, res) => {
  res.json({ status: 'OK', message: 'Backend Express fonctionne !' });
});

app.get('/api/posts', (req, res) => {
  res.json([
    { id: 1, title: 'Premier article', content: 'Contenu' }
  ]);
});

// Port 1337 (comme bknd)
const port = 1337;
app.listen(port, '0.0.0.0', () => {
  console.log(`✅ Serveur démarré sur le port ${port}`);
});