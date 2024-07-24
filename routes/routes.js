const express = require('express');
const router = express.Router();

router.post('/submit', (req, res) => {
    const formData = req.body;

    let result = 0;
    Object.values(formData).forEach(value => {
        if (!isNaN(value)) {
            
        }
    })

res.json({ result: result}); 
});

module.exports = router;


