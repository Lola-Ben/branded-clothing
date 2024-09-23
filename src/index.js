import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import ShopPage from './pages/ShopPage/shop.component'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const HatsPage = () => {
  return (<div>
    <h1>Hats Page</h1>
  </div>)
}
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <div>404 NOT FOUND</div>
  },
  {
    path: "/shop",
    element: <ShopPage />
  },
  {
    path: "/shop/hats",
    element: <HatsPage />,
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
