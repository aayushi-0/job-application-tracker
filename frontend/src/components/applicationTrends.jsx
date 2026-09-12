function ApplicationTrends({ trends }) {
    return (
      <section className="trends-card">
        <div className="section-header">
          <div>
            <h2>Application Trends</h2>
            <p>Track how your application activity changes over time.</p>
          </div>
        </div>
  
        <div className="trend-chart">
          {trends.length === 0 ? (
            <p className="trend-empty">
              No application trend data available yet.
            </p>
          ) : (
            trends.map((trend) => (
              <div className="trend-item" key={trend.month}>
                <span className="trend-month">{trend.month}</span>
  
                <div className="trend-bar-container">
                  <div
                    className="trend-bar"
                    style={{
                      width: `${Math.max(trend.count * 20, 10)}%`,
                    }}
                  />
                </div>
  
                <strong>{trend.count}</strong>
              </div>
            ))
          )}
        </div>
      </section>
    );
  }
  
  export default ApplicationTrends;