const Card = ({ title, subtitle, tag, accent = '#e63946', children }) => {
  return (
    <article className="card" style={{ '--card-accent': accent }}>
      <div className="card-header">
        {tag && <span className="card-tag">{tag}</span>}
        <h3 className="card-title">{title}</h3>
        {subtitle && <p className="card-subtitle">{subtitle}</p>}
      </div>
      <div className="card-body">{children}</div>
    </article>
  );
};

export default Card;
