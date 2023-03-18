import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { URLs } from '../__data__/constants/url';

const router = createBrowserRouter([
  {
    path: URLs.main,
    // Тут пропишете основную страницу
    element: <div>Hello world!</div>,
  },
]);

export const RouterWrapper = () => {
  return (
    <RouterProvider router={router} />
  )
}
