function StatCard({ title, value }) {
    return (
      <div className="stat-card">
        <span>{title}</span>
        <strong>{value}</strong>
      </div>
    );
  }
  
  export default StatCard;