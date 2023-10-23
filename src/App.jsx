import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './components/Header/index';
import ContactUsForm from './components/ContactUs';
import About from './components/About';

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
    {
      path:'/Contact',
      element:<ContactUsForm />
    },
    {
      path:'/About',
      element:<About/>
    }
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
