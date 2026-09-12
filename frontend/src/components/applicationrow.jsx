function ApplicationRow({
  company,
  role,
  location,
  date,
  status,
  onDelete,
  onEdit,
  onClick,
}) {
  return (
    <div className="application-row" onClick={onClick}>
      <div className="application-info">
        <strong>{company}</strong>
        <span>{role}</span>

        <div className="application-meta">
          {location && <span>{location}</span>}
          {date && <span>{date}</span>}
        </div>
      </div>

      <div className="application-actions">
        <span className={`status ${status.toLowerCase()}`}>
          {status}
        </span>
        
        <button
  className="details-button"
  onClick={(event) => {
    event.stopPropagation();
    onClick();
  }}
>
  View Details
</button>

        <button
          className="edit-button"
          onClick={(event) => {
            event.stopPropagation();
            onEdit();
          }}
        >
          Edit
        </button>

        <button
          className="delete-button"
          onClick={(event) => {
            event.stopPropagation();

            const confirmed = window.confirm(
              `Delete ${company} application?`
            );

            if (confirmed) {
              onDelete();
            }
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ApplicationRow;