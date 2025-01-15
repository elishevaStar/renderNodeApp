const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;
const RENDER_API_KEY = 'rnd_rNITpNEkJEbKwrCzL3maTal9ThZH'; 

// Route ברירת מחדל
app.get('/', (req, res) => {
    res.send('Welcome to the API');
  });

app.get('/services', async (req, res) => {
  try {
    const response = await axios.get('https://api.render.com/v1/services', {
      headers: {
        'Authorization': `Bearer ${RENDER_API_KEY}`
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching services');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
