const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); 
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('js'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'slagging.html'));
});


// Start Server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
