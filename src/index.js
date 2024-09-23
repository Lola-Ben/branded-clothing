import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import ShopPage from './pages/ShopPage/shop.component'
import reportWebVitals from './reportWebVitals';
import Header from './components/header/header.component';
import ErrorPage from './pages/errorPage/errorPage.component';

const root = ReactDOM.createRoot(document.getElementById('root'));

 
const router = createBrowserRouter([
  {
    element: <Header  />,
    children: [
          {
            path: "/",
            element: <App/>,
            errorElement:<ErrorPage />
          },
          {
            path: "/shop",
            element: <ShopPage />
          }
    ]
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
