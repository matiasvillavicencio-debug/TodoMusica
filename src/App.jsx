import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const [currentView, setCurrentView] = useState('home');

  const navLinks = [
    { label: 'Inicio', view: 'home', isBtn: false },
    { label: 'Discos', view: 'home', isBtn: false },
    { label: 'Artistas', view: 'home', isBtn: false },
    { label: 'Iniciar Sesión', view: 'login', isBtn: true },
    { label: 'Registrarse', view: 'register', isBtn: true },
  ];

  return (
    <>
      <Header
        title="TodoMúsica"
        navLinks={navLinks}
        currentView={currentView}
        onNavigate={setCurrentView}
      />

      {currentView === 'home' && <Home />}
      {currentView === 'login' && <Login onNavigate={setCurrentView} />}
      {currentView === 'register' && <Register onNavigate={setCurrentView} />}

      <Footer
        author="Matias Villavicencio"
        subject="Aplicaciones Híbridas"
        teacher="Jonathan Emanuel Cruz"
        commission="DWM4AP"
      />
    </>
  );
}

export default App;