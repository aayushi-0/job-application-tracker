const express = require('express');

const {
  getApplications,
  createApplication,
  updateApplication,
  deleteApplication,
  getApplicationStats,
  getApplicationTrends,
} = require('../controllers/applicationController');

const router = express.Router();

router.get('/', getApplications);

router.get('/stats', getApplicationStats);

router.get('/trends', getApplicationTrends);

router.post('/', createApplication);

router.put('/:id', updateApplication);

router.delete('/:id', deleteApplication);

module.exports = router;