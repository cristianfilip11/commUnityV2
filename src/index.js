import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const links = [
  {
    href: "https://fonts.googleapis.com",
    rel: "preconnect",
  },
  {
    href: "https://fonts.gstatic.com",
    rel: "preconnect",
    crossorigin: "true",
  },
  {
    href: "https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&family=Varela+Round&display=swap",
    rel: "stylesheet",
  },
];

links.forEach(({ href, rel, crossorigin }) => {
  const link = document.createElement("link");
  link.href = href;
  link.rel = rel;
  if (crossorigin) link.crossOrigin = crossorigin;
  document.head.appendChild(link);
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
