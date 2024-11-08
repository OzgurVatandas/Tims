import React from 'react';
import ReactDOM from 'react-dom/client'; // createRoot için react-dom/client import etmelisiniz
import Master from "./master";


import 'aos/dist/aos.css'; // AOS stilini dahil ediyoruz

import $ from 'jquery';
window.$ = window.jQuery = $;

import 'bootstrap/dist/css/bootstrap.min.css';


if (document.getElementById('app')) {
    const root = ReactDOM.createRoot(document.getElementById('app'));
    root.render(<Master />);
}
