function Header({ title, navLinks, currentView, onNavigate }) {
  return (
    <header className="header">
      <div className="header-brand">
        <span className="header-icon">🎵</span>
        <h1 className="header-title">{title}</h1>
      </div>
      
      <nav className="header-nav" style={{ alignItems: 'center' }}>
        {navLinks.map((link, index) => {
          if (link.isBtn) {
            const isSelected = currentView === link.view;
            return (
              <button
                key={index}
                className={`btn ${isSelected ? 'btn-active' : ''}`}
                style={{ padding: '8px 16px', fontSize: '0.9rem' }}
                onClick={() => onNavigate(link.view)}
              >
                {link.label}
              </button>
            );
          }

          const isLinkActive = currentView === link.view && !link.isBtn;
          return (
            <a
              key={index}
              href="#"
              className="nav-link"
              style={{ color: isLinkActive ? '#22c55e' : 'white' }}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(link.view);
              }}
            >
              {link.label}
            </a>
          );
        })}
      </nav>
    </header>
  );
}

export default Header;