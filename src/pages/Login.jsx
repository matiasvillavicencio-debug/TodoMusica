import { useState } from 'react';
import MiGifBienvenida from '../assets/Mesirve5.gif';

function Login({ onNavigate }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = 'El email es obligatorio';
    if (!formData.password) newErrors.password = 'La contraseña es obligatoria';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    try {
      const response = await fetch('http://localhost:3000/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.status === 'ok') {
        setMessage({ text: '¡Sesión iniciada con éxito!', type: 'success' });
        
        localStorage.setItem('token', data.token);
        
        setTimeout(() => onNavigate('home'), 1000); 

      } else {
        setMessage({ text: data.msg || 'Credenciales incorrectas', type: 'error' });
      }
    } catch (error) {
      setMessage({ text: 'Error de conexión con el servidor', type: 'error' });
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <img 
          src={MiGifBienvenida} 
          alt="Bienvenida" 
          style={{ 
            width: '180px', 
            height: 'auto', 
            display: 'block', 
            margin: '0 auto 20px', 
            borderRadius: '10px',
            imageRendering: 'pixelated'
          }} 
        />
        
        <h2 className="auth-title">Iniciar Sesión</h2>
        
        {message.text && (
          <p className="auth-message" style={{ color: message.type === 'success' ? '#22c55e' : '#ef4444' }}>
            {message.text}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input type="email" name="email" className="form-input" value={formData.email} onChange={handleChange} placeholder="correo@ejemplo.com" />
            {errors.email && <span className="form-error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label className="form-label">Contraseña</label>
            <input type="password" name="password" className="form-input" value={formData.password} onChange={handleChange} placeholder="••••••••" />
            {errors.password && <span className="form-error">{errors.password}</span>}
          </div>

          <button type="submit" className="btn btn-active btn-sm" style={{ width: '100%', marginTop: '10px' }}>
            Ingresar
          </button>
        </form>

        <p className="auth-switch">
          ¿No tienes cuenta?{' '}
          <span className="auth-link" onClick={() => onNavigate('register')}>
            Regístrate
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;