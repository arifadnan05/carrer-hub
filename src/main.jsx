import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Jobs from './Components/Jobs/Jobs';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import Statistics from './Components/Statistics/Statistics';
import Blogs from './Components/Blogs/Blogs';
import ErrorPage from './Components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/jobs',
        element: <Jobs></Jobs>
      },
      {
        path: '/applied',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
