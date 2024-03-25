import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


/** import all components */
import Username from './components/Username';
import Password from './components/Password';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Recovery from './components/Recovery';
import Reset from './components/Reset';
import PageNotFound from './components/PageNotFound';


/** auth middleware */
import { AuthorizeUser, ProtectRoute } from './middleware/auth'

/** root routes */
const router = createBrowserRouter([
    {
        path: '/',
        element: <Username></Username>
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: '/password',
        element: <ProtectRoute><Password /></ProtectRoute>
    },
    {
        path: '/Dashboard',
        element: <AuthorizeUser><Dashboard /></AuthorizeUser>
    },
    {
        path: '/recovery',
        element: <Recovery></Recovery>
    },
    {
        path: '/reset',
        element: <Reset></Reset>
    },
    {
        path: '*',
        element: <PageNotFound></PageNotFound>
    },
])

export default function App() {
    return (
        <main>
            <RouterProvider router={router}></RouterProvider>
        </main>
    )
}
