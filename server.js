const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/status', (req, res) => {
  res.json({ status: 'OK', message: 'Backend Express fonctionne sur Railway !' });
});

app.get('/api/posts', (req, res) => {
  res.json([
    { id: 1, title: 'Premier article', content: 'Contenu du premier article' },
    { id: 2, title: 'Deuxième article', content: 'Contenu du deuxième article' }
  ]);
});

// 👇 TRÈS IMPORTANT POUR RAILWAY
const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => {
  console.log(`✅ Serveur démarré sur le port ${port}`);
});