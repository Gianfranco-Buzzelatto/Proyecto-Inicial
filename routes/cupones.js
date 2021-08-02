const express = require('express');
const { get } = require('.');
const router = express.Router();

router.get('/', (req, res,) => {
    res.render('cupones', { title: 'Cupones ' });
  });

module.exports = router;