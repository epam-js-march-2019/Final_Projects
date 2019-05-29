const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const AuthController = require('../controllers/AuthController');
const RecordController = require('../controllers/RecordController');
const DateControler = require('../controllers/DateController');
const auth = require('../middleware/auth');

router.get('/', (req, res) => res.sendFile('/public/index.html', {root: '__dirname/..'}));

router.post('/api/users', UserController.store);

router.post('/api/auth', AuthController.store);

router.post('/api/records', auth, RecordController.store);
router.get('/api/records', auth, RecordController.index);

router.get('/api/dates', DateControler.index);

module.exports = router;