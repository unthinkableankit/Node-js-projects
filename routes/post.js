const express = require('express');
const { getPost, createPost } = require('../controllers/post')
const { createpostValidator } = require('../middleware/validator')

const router = express.Router();

router.get('/', getPost);
router.post('/post', createpostValidator, createPost);

module.exports = router 