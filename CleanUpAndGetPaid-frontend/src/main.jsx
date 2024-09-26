import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './Pages/Home';
import ViewItems from './Pages/ViewItems';
import AddItem from './Pages/AddItem';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/view-items" element={<ViewItems />} />
                <Route path="/add-item" element={<AddItem />} />
            </Routes>
        </Router>
    </React.StrictMode>
);
