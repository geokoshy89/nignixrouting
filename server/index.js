const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = 3000;

app.get('/api/v1/hello', (req, res) => {
  const data = {
    message: 'Hello, world!',
    timestamp: new Date().toISOString(),
    status: 200,
  };

  res.json(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
