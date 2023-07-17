

const express = require('express');
const router = express.Router();
const Gallery = require('../models/Gallery');

// Gallery management routes
router.get('/galleries/profile', async (req, res) => {
  try {
    const galleries = await Gallery.find().sort({ createdAt: 'desc' });
    res.render('galleries', { galleries });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});
router.get('/', (req, res, next) => {
  res.render('index');
});

router.post('/galleries/post', async (req, res) => {
  try {
    const { name, images } = req.body;
    const gallery = new Gallery({ name, images });
    await gallery.save();
    // res.status(200).send("save")
    res.redirect('/g/galleries/profile');
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
