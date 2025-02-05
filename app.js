const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const xlsx = require('xlsx'); 
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('js'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'coal_table.html'));
});

app.get('/api/data', (req, res) => {
  const filePath = path.join(__dirname, 'public','slagging_data.xlsx'); // Path to your Excel file
  const workbook = xlsx.readFile(filePath);
  const sheetName = workbook.SheetNames[0]; // Assuming the first sheet
  const sheet = workbook.Sheets[sheetName];
  const jsonData = xlsx.utils.sheet_to_json(sheet, { header: 1 });

  res.json(jsonData);
});


// Start Server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
