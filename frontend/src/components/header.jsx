function Header({ onAddApplication }) {
    return (
      <header className="header">
        <div>
        <h1>DASHBOARD</h1>
      <p>Welcome back, Aayushi.</p>
        </div>
  
        <button
  className="add-button"
  onClick={onAddApplication}
>
  + Add Application
</button>
      </header>
    );
  }
  
  export default Header;