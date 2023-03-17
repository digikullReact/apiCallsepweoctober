import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CreateIndex from './components/CreateIndex';
import Showdata from './components/Showdata';
import Crud from './components/Crud';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:"/createIndex",
    element:<CreateIndex/>
  },
  {
    path:"/showData/:indexName",
    element:<Showdata/>
  },
  { 
    path:"/crud",
    element:<Crud/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
  ,
)
