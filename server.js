const express = require('express');
const app = express();

app.use(express.json());

// Route de test
app.get('/api/status', (req, res) => {
  res.json({ status: 'OK', message: 'Backend Express fonctionne sur Railway !' });
});

// Route pour les posts (en mémoire pour le moment)
let posts = [
  { id: 1, title: 'Premier article', content: 'Contenu du premier article' },
  { id: 2, title: 'Deuxième article', content: 'Contenu du deuxième article' }
];

app.get('/api/posts', (req, res) => {
  res.json(posts);
});

app.get('/api/posts/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).json({ error: 'Post non trouvé' });
  res.json(post);
});

app.post('/api/posts', (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
    content: req.body.content
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});

// Port pour Railway
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});