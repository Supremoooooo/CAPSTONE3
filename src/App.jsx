import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './components/Header/index';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },

    {
      path:'/Header',
      element: <Header />,
    },
  ]);

  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
};
export default App;
