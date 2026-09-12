function Sidebar({ activePage, onPageChange }) {
    return (
      <aside className="sidebar">
        <div className="logo">
          JobTrack
        </div>
  
        <nav>
          <button
            className={activePage === 'dashboard' ? 'active' : ''}
            onClick={() => onPageChange('dashboard')}
          >
            Dashboard
          </button>
  
          <button
            className={activePage === 'applications' ? 'active' : ''}
            onClick={() => onPageChange('applications')}
          >
            Applications
          </button>
  
          <button
            className={activePage === 'interviews' ? 'active' : ''}
            onClick={() => onPageChange('interviews')}
          >
            Interviews
          </button>
  
          <button
            className={activePage === 'settings' ? 'active' : ''}
            onClick={() => onPageChange('settings')}
          >
            Settings
          </button>
        </nav>
      </aside>
    );
  }
  
  export default Sidebar;