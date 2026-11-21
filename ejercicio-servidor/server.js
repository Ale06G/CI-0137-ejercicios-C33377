import express from 'express';
import path from 'node:path';
import curriculumRouter from './routes/curriculum.js';
import { noEncontrado } from './controllers/curriculumController.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(import.meta.dirname, 'views'));

app.use(express.static(path.join(import.meta.dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.use('/', curriculumRouter);
app.use(noEncontrado);

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
