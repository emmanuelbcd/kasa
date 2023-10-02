//index est le point d'entrée de l'application react.
//c'est le premier fichier qui s'exécute

//on importe les modules nécessaires pour démarrer l'appli
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//on crée un root react
const root = ReactDOM.createRoot(document.getElementById('root'));
//on "render" (ou on affiche) le composant App à l'intérieur de l'élément racine (root)
root.render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>
);

//React.StrictMode vérifie les problèmes potentiels dans l'application
