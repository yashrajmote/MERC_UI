const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); 
const app = express();
const port = 3002;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('js'));

// Routes
const apiRoutes = require('./routes/routes');
app.use('/api', apiRoutes);

// Start Server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
