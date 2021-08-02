const express = require('express');
const router = express.Router();

const showIndex = (req, res) => {
    res.render('admin/adminIndex', {title: "Administrador"});
}

router.get('/', showIndex);
module.exports = router;