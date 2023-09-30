//index est le point d'entrée de l'application react.
//c'est le premier fichier qui s'exécute

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>
);

//React.StrictMode vérifie les problèmes potentiels dans l'application
