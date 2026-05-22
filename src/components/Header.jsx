const Header = ({ title, navLinks }) => {
  return (
    <header className="header">
      <div className="header-brand">
        <h1 className="header-title">{title}</h1>
      </div>
      <nav className="header-nav">
        {navLinks.map((link) => (
          <a key={link.label} href={link.href} className="nav-link">
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
