import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

// Styles
import './App.css'

// Layouts
import RootLayout from './layouts/RootLayout';

// Pages
import Dashboard from './pages/Dashboard';
import Create, { createAction } from './pages/Create';
import Profile from './pages/Profile';


function App() {

	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path='/' element={<RootLayout />}>
				<Route index element={<Dashboard />} />
				<Route path='/create' element={<Create />} action={createAction} />
				<Route path='/profile' element={<Profile />} />
			</Route>
		)
	)


	return (
		<RouterProvider router={router} />
	)
}

export default App;
