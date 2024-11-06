import React from 'react';
import ReactDOM from 'react-dom/client'; // createRoot için react-dom/client import etmelisiniz
import Master from "./components/Master";

if (document.getElementById('app')) {
    const root = ReactDOM.createRoot(document.getElementById('app'));
    root.render(<Master />);
}
