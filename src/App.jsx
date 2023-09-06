import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Styles
import './App.css'

// Layouts
import RootLayout from './layouts/RootLayout';

// Pages
import Dashboard from './pages/Dashboard';
import Create from './pages/Create';
import Profile from './pages/Profile';


function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<RootLayout />} >
					<Route index element={<Dashboard />} />
					<Route path='/create' element={<Create />} />
					<Route path='/profile' element={<Profile />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App;
