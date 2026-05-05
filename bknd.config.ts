import { defineConfig } from 'bknd';

export default defineConfig({
  admin: {
    enabled: true,
    path: '/admin'
  },
  api: {
    path: '/api'
  },
  database: {
    type: 'sqlite',
    name: 'data.db'
  },
  entities: {
    posts: {
      schema: {
        title: { type: 'string', required: true },
        content: { type: 'text', required: true },
        excerpt: { type: 'string' },
        published: { type: 'boolean', default: false },
        created_at: { type: 'datetime', default: 'now' }
      }
    }
  },
  cors: {
    origin: '*',
    credentials: true
  }
});