// Create web server

// Import express
const express = require('express');

// Create router
const router = express.Router();

// Import controller
const commentController = require('../controllers/commentController');

// Define routes
router.get('/', commentController.comment_index);
router.post('/', commentController.comment_create_post);
router.get('/create', commentController.comment_create_get);
router.get('/:id', commentController.comment_details);
router.delete('/:id', commentController.comment_delete);

// Export module
module.exports = router;