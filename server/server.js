const express = require('express');
const app = express();
//const PORT = 3000;

const cors = require('cors');

// Use CORS middleware before your routes
app.use(cors());

/*
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
*/

/*
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
*/
app.listen(3001, () => {
  console.log('Server runs!');
});
