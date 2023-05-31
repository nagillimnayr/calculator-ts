import './style/style.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

const main = () => {
  const app = document.createElement('div');
  app.id = 'app';
  document.body.appendChild(app);

  const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
  );
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};
window.addEventListener('load', main);
