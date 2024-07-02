const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); 
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const apiRoutes = require('./routes/routes');
app.use('/api', apiRoutes);

// Start Server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
