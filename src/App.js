import React from 'react'
import './App.css'
import Navbar  from './components/Navbar'
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Characters from './components/Characters';
import Creators from './components/Creators';
import Events from './components/Events';
import Series from './components/Series';
import Comic from './components/Comic';

const router = createBrowserRouter([

  {
    path: '/',
    element:<Navbar/>,
    children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/characters',
            element: <Characters/>
        },
        {
            path: '/creators',
            element: <Creators/>
        },
        {
            path: '/events',
            element: <Events/>
        },
        {
            path: '/series',
            element: <Series/>
        },
        {
            path: '/comic',
            element: <Comic/>
        }
    ]
}
]);



function App() {
  return (
    // <div className="App">
    //   <Navbar/>
    //   <Second/>
    

    // </div>
    <RouterProvider router={router}/>
  );
}

export default App
