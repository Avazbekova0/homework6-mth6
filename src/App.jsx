import { Photos } from './Photos';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">
          <span className="logo-icon">P</span>
          <span>Pinterest</span>
        </div>

        <div className="header-right">
          <span className="header-label">Discover</span>
          <div className="avatar">U</div>
        </div>
      </header>

      <main className="main">
        <div className="hero">
          <h1>Explore inspiration</h1>
          <p>Discover ideas worth saving.</p>
        </div>

        <Photos />
      </main>
    </div>
  );
}

export default App;