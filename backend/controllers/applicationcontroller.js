const Application = require('../models/Application');

// Get all applications
const getApplications = async (req, res) => {
  try {
    const applications = await Application.find().sort({
      createdAt: -1,
    });

    res.json(applications);
  } catch (error) {
    res.status(500).json({
      message: 'Failed to fetch applications',
      error: error.message,
    });
  }
};

// Create a new application
const createApplication = async (req, res) => {
  try {
    const application = await Application.create(req.body);

    res.status(201).json(application);
  } catch (error) {
    res.status(400).json({
      message: 'Failed to create application',
      error: error.message,
    });
  }
};

// Update an application
const updateApplication = async (req, res) => {
  try {
    const application = await Application.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!application) {
      return res.status(404).json({
        message: 'Application not found',
      });
    }

    res.json(application);
  } catch (error) {
    res.status(400).json({
      message: 'Failed to update application',
      error: error.message,
    });
  }
};

// Delete an application
const deleteApplication = async (req, res) => {
  try {
    const application = await Application.findByIdAndDelete(
      req.params.id
    );

    if (!application) {
      return res.status(404).json({
        message: 'Application not found',
      });
    }

    res.json({
      message: 'Application deleted successfully',
    });
  } catch (error) {
    res.status(400).json({
      message: 'Failed to delete application',
      error: error.message,
    });
  }
};

// Get application statistics
const getApplicationStats = async (req, res) => {
    try {
      const applications = await Application.find();
  
      const stats = {
        total: applications.length,
        applied: applications.filter(
          (application) => application.status === 'Applied'
        ).length,
        assessment: applications.filter(
          (application) => application.status === 'Assessment'
        ).length,
        interview: applications.filter(
          (application) => application.status === 'Interview'
        ).length,
        offer: applications.filter(
          (application) => application.status === 'Offer'
        ).length,
        rejected: applications.filter(
          (application) => application.status === 'Rejected'
        ).length,
      };
  
      res.json(stats);
    } catch (error) {
      res.status(500).json({
        message: 'Failed to fetch application statistics',
        error: error.message,
      });
    }
  };

  // Get application trends
const getApplicationTrends = async (req, res) => {
    try {
      const applications = await Application.find().sort({ date: 1 });
  
      const monthlyTrends = {};
  
      applications.forEach((application) => {
        const date = new Date(application.date || application.createdAt);
  
        const month = date.toLocaleString('en-US', {
          month: 'short',
          year: 'numeric',
        });
  
        monthlyTrends[month] = (monthlyTrends[month] || 0) + 1;
      });
  
      const trends = Object.entries(monthlyTrends).map(
        ([month, count]) => ({
          month,
          count,
        })
      );
  
      res.json(trends);
    } catch (error) {
      res.status(500).json({
        message: 'Failed to fetch application trends',
        error: error.message,
      });
    }
  };

  module.exports = {
    getApplications,
    createApplication,
    updateApplication,
    deleteApplication,
    getApplicationStats,
    getApplicationTrends,
  };