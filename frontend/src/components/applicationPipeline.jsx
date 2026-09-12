function ApplicationPipeline({ stats }) {
    const stages = [
      { label: 'Applied', value: stats.applied },
      { label: 'Assessment', value: stats.assessment },
      { label: 'Interview', value: stats.interview },
      { label: 'Offer', value: stats.offer },
    ];
  
    return (
      <section className="pipeline-card">
        <div className="section-header">
          <div>
            <h2>Application Pipeline</h2>
            <p>See how your applications are progressing.</p>
          </div>
        </div>
  
        <div className="pipeline">
          {stages.map((stage, index) => (
            <div className="pipeline-item" key={stage.label}>
              <div className="pipeline-stage">
                <div className="pipeline-number">{stage.value}</div>
                <span>{stage.label}</span>
              </div>
  
              {index < stages.length - 1 && (
                <div className="pipeline-arrow">→</div>
              )}
            </div>
          ))}
        </div>
  
        <div className="rejected-stage">
          <div className="pipeline-number">{stats.rejected}</div>
          <span>Rejected</span>
        </div>
      </section>
    );
  }
  
  export default ApplicationPipeline;