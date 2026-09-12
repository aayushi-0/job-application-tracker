function StatusDistribution({ stats }) {
    const statuses = [
      { label: 'Applied', value: stats.applied },
      { label: 'Assessment', value: stats.assessment },
      { label: 'Interview', value: stats.interview },
      { label: 'Offer', value: stats.offer },
      { label: 'Rejected', value: stats.rejected },
    ];
  
    const total = stats.total;
  
    return (
      <section className="distribution-card">
        <div className="section-header">
          <div>
            <h2>Status Distribution</h2>
            <p>Understand where your applications stand.</p>
          </div>
        </div>
  
        <div className="distribution-list">
          {statuses.map((status) => {
            const percentage =
              total === 0 ? 0 : Math.round((status.value / total) * 100);
  
            return (
              <div className="distribution-item" key={status.label}>
                <div className="distribution-label">
                  <span>{status.label}</span>
                  <strong>{status.value}</strong>
                </div>
  
                <div className="distribution-bar">
                  <div
                    className="distribution-fill"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
  
                <span className="distribution-percentage">
                  {percentage}%
                </span>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
  
  export default StatusDistribution;