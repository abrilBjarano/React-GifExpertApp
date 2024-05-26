import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles.css';

import 'primereact/resources/themes/arya-orange/theme.css';


import { GifExpertApp } from './GifExpertApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>,
)
