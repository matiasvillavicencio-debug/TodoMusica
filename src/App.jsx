import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {

  const navLinks = [
    { label: 'Inicio', href: '#' },
    { label: 'Discos', href: '#' },
    { label: 'Artistas', href: '#' },
  ];

  return (
    <>
      <Header
        title="TodoMúsica"
        navLinks={navLinks}
      />

      <Home />

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