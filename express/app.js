import express from 'express';

const app = express();

app.use(express.json());

app.post('/', (req, res, next) => {
  console.log(req.body);
});

app.all('/api', (req, res, next) => {
  console.log('all -> /api 경로에 대해 모든 요청 수행');
});

app.use('/test', (req, res, next) => {
  console.log(
    'use -> /test/aksk 같이 해당 경로 뒤에 무엇이 와도 모든 요청수행'
  );
});

app.get(
  '/',
  (req, res, next) => {
    console.log('first');
    if (true) {
      return res.send('true');
    }
    res.send('hello');
  },
  (req, res, next) => {
    console.log('first2');
  }
);

app.get('/', (req, res, next) => {
  console.log('second');
});

app.use((req, res, next) => {
  res.status(404).send('not found');
});
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send('sever error');
});

app.get('/sky/:id', (req, res, next) => {
  console.log('get');
  console.log(req.params);
  console.log(req.query);

  res.setHeader('key', 'value');
  res.status(201).send('created');
  res.send('hi');
});

app.listen(8080);
