import { useState } from 'react';

function ApplicationForm({ application, onClose, onSave }) {
  const [formData, setFormData] = useState({
    company: application?.company || '',
    role: application?.role || '',
    location: application?.location || '',
    status: application?.status || 'Applied',
    date: application?.date || '',
    url: application?.url || '',
    notes: application?.notes || '',
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    onSave({
      ...formData,
      statusClass: formData.status.toLowerCase(),
    });
  }

  return (
    <div className="application-form">
      <div className="form-header">
        <div>
          <h2>
            {application ? 'Edit Application' : 'New Application'}
          </h2>

          <p>
            {application
              ? 'Update the details of this application.'
              : 'Add a new job application to your tracker.'}
          </p>
        </div>

        <button
          type="button"
          className="close-button"
          onClick={onClose}
        >
          ×
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Company</label>

          <input
            type="text"
            name="company"
            placeholder="e.g. Deloitte"
            value={formData.company}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Job Role</label>

          <input
            type="text"
            name="role"
            placeholder="e.g. Data Analyst"
            value={formData.role}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Location</label>

          <input
            type="text"
            name="location"
            placeholder="e.g. Bengaluru"
            value={formData.location}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Status</label>

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="Applied">Applied</option>
            <option value="Assessment">Assessment</option>
            <option value="Interview">Interview</option>
            <option value="Offer">Offer</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>

        <div className="form-group">
          <label>Application Date</label>

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Job URL</label>

          <input
            type="url"
            name="url"
            placeholder="https://..."
            value={formData.url}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Notes</label>

          <textarea
            name="notes"
            placeholder="Add any notes about this application..."
            rows="4"
            value={formData.notes}
            onChange={handleChange}
          />
        </div>

        <div className="form-actions">
          <button
            type="button"
            className="cancel-button"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            type="submit"
            className="save-button"
          >
            {application ? 'Update Application' : 'Save Application'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ApplicationForm;